import React, { Component } from 'react';
import { Form, Button, FormGroup, ControlLabel } from 'react-bootstrap';
import { Input } from 'reactstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { MDBInput } from 'mdbreact';

export class ServicesProfile extends Component {
  constructor() {
    super();
    this.state = {
      _id: '',
      PlayGround: '',
      SwimmingPool: '',
      FoodOffer: '',
      SoftDrinks: '',
      TV: '',
      GrillArea: '',
      Shesha: '',
      GreenArea: '',
      KidsArea: '',
      otherService: '',
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      _id: decoded.id,
      PlayGround: '',
      SwimmingPool: '',
      FoodOffer: '',
      SoftDrinks: '',
      TV: '',
      GrillArea: '',
      Shesha: '',
      GreenArea: '',
      KidsArea: '',
      otherService: '',
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState._id !== this.state._id) {
      this.handleSubmit();
    }
  }

  handleSubmitSave = (e) => {
    e.preventDefault();
    axios
      .put(`/updateServesis/${this.state._id}`, {
        img1: this.state.img1,
        price1: this.state.price1,
        quantity1: this.state.quantity1,
        img2: this.state.img2,
        price2: this.state.price2,
        quantity2: this.state.quantity2,
        img3: this.state.img3,
        price3: this.state.price3,
        quantity3: this.state.quantity3,
      })
      .then((res) => {
        alert('Save update done');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <Form style={{ marginLeft: '7%', marginTop: '10%', maxWidth: '80%' }}>
          <MDBInput
            label='Play Ground'
            type='checkbox'
            id='checkbox2'
            indeterminate
          />
          <MDBInput
            label='Swimming Pool'
            type='checkbox'
            id='checkbox2'
            indeterminate
          />
          <MDBInput
            label='Food Offer'
            type='checkbox'
            id='checkbox2'
            indeterminate
          />
          <MDBInput
            label='Soft Drinks'
            type='checkbox'
            id='checkbox2'
            indeterminate
          />
          <MDBInput label='TV' type='checkbox' id='checkbox2' indeterminate />
          <MDBInput
            label='Grill Area'
            type='checkbox'
            id='checkbox2'
            indeterminate
          />
          <MDBInput
            label='Shesha'
            type='checkbox'
            id='checkbox2'
            indeterminate
          />
          <MDBInput
            label='Green Area'
            type='checkbox'
            id='checkbox2'
            indeterminate
          />
          <MDBInput
            label='Kids Area'
            type='checkbox'
            id='checkbox2'
            indeterminate
          />
          <br></br>
          <Button variant='primary' type='submit'>
            SAVE
          </Button>
        </Form>
      </div>
    );
  }
}

export default ServicesProfile;
