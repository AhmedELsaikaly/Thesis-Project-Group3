import React, { Component } from 'react';
// import { Form, Button, Navbar } from 'react-bootstrap';
// import { Input } from 'reactstrap';
// import { Col } from 'react-bootstrap';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export class RenderOwnerData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      fullName: '',
      email: '',
      mobileNumber: '',
      area: '',
      placeName: '',
      license: '',
    };
  }
  componentDidMount() {
    const token = localStorage.ownertoken;
    const decoded = jwt_decode(token);
    this.setState({
      _id: decoded._id,
      fullName: '',
      email: '',
      mobileNumber: '',
      area: '',
      placeName: '',
      license: '',
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState._id !== this.state._id) {
      this.handleSubmit();
    }
  }

  handleSubmit = () => {
    axios
      .get(`/Owner/${this.state._id}`)
      .then((res) => {
        console.log('test', res.data);
        const data = res.data[0];
        console.log(data);
        this.setState({
          fullName: data.fullName,
          email: data.email,
          mobileNumber: data.mobileNumber,
          area: data.area,
          placeName: data.placeName,
          license: data.license,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <p>{this.state.fullName}</p>
        <p>{this.state.email}</p>
        <p>{this.state.mobileNumber}</p>
        <p>{this.state.area}</p>
        <p>{this.state.placeName}</p>
        <p>{this.state.license}</p>
      </div>
    );
  }
}

export default RenderOwnerData;
