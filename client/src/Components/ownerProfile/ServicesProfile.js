import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
// import { Input } from 'reactstrap';
// import { Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import CheckBox from '../Service/CheckBox';
import jwt_decode from 'jwt-decode';
// import { MDBInput } from 'mdbreact';

export class ServicesProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ownerId: '',
      services: [
        { id: 1, value: 'PlayGround', isChecked: false },
        { id: 2, value: 'SwimmingPool', isChecked: false },
        { id: 3, value: 'FoodOffer', isChecked: false },
        { id: 4, value: 'SoftDrinks', isChecked: false },
        { id: 5, value: 'TV', isChecked: false },
        { id: 6, value: 'GrillArea', isChecked: false },
        { id: 7, value: 'Shesha', isChecked: false },
        { id: 8, value: 'GreenArea', isChecked: false },
        { id: 9, value: 'KidsArea', isChecked: false },
      ],
      otherService: '',
    };
  }

  componentDidMount() {
    const token = localStorage.ownertoken;
    const decoded = jwt_decode(token);
    this.setState({
      ownerId: decoded.id,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.ownerId !== this.state.ownerId) {
      this.GetData();
    }
  }

  GetData = () => {
    axios
      .get(`/services/${this.state.ownerId}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.length > 0) {
          const data = res.data[0].servicesAvailable;
          var recivedServices = [];
          Object.keys(data).forEach((element, index) => {
            recivedServices.push({
              id: index,
              value: element,
              isChecked: data[element],
            });
            this.setState({
              services: recivedServices,
              otherService: res.data[0].otherService,
            });
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleSubmitSave = (e) => {
    e.preventDefault();
    let CheckedServices = {};
    const services = this.state.services;
    for (var i = 0; i < services.length; i++) {
      CheckedServices[services[i].value] = services[i].isChecked;
    }
    axios
      .put(`/updateServesis/${this.state.ownerId}`, {
        servicesAvailable: CheckedServices,
        otherService: this.state.otherService,
      })
      .then((res) => {
        alert('Save update done');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //handleCheckChieldElement function
  handleCheckChieldElement = (event) => {
    let services = this.state.services;
    services.forEach((service) => {
      if (service.value === event.target.value) {
        service.isChecked = event.target.checked;
      }
    });
    this.setState({ services: services });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div style={{ marginLeft: '20%' }}>
        <h2 style={{ marginLeft: '6%' }}>Edit Your Services</h2>
        <div
          style={{ marginLeft: '5%' }}
          id='serviceElement'
          className='form-group '
        >
          {this.state.services.map((service, index) => {
            return (
              <span key={index}>
                <CheckBox
                  {...service}
                  handleCheckChieldElement={this.handleCheckChieldElement}
                />
              </span>
            );
          })}
        </div>
        <div style={{ marginLeft: '7%' }} className='form-group'>
          <label htmlFor='note'>
            <span>Other Services</span>
          </label>
          <textarea
            style={{ marginLeft: '0', marginRight: '0' }}
            className='form-control w-200'
            onChange={this.handleChange}
            value={this.state.otherService}
            name='otherService'
            id='exampleTextarea'
            rows='2'
            placeholder='Write your Other Services'
          ></textarea>
          <br></br>
          <Button
            style={{ width: '60px' }}
            onClick={this.handleSubmitSave}
            variant='primary'
            type='submit'
          >
            SAVE
          </Button>
          <br></br>
        </div>
      </div>
    );
  }
}

export default ServicesProfile;
