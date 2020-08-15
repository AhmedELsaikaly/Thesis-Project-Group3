//import used technologies
import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Input } from "reactstrap";
import { Col, Container } from "react-bootstrap";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Navbar from "../Navbar/Navbar";

export class CustomerProfile extends Component {
  constructor() {
    super();
    this.state = {
      _id: "",
      fullName: "",
      email: "",
      mobileNumber: "",
      address: "",
    };
    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      _id: decoded.id,
      fullName: "",
      email: "",
      mobileNumber: "",
      address: "",
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
      .put(`/updataCustomer/${this.state._id}`, {
        fullName: this.state.fullName,
        email: this.state.email,
        mobileNumber: this.state.mobileNumber,
        address: this.state.address,
      })
      .then((res) => {
        alert("Save update done");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    axios
      .get(`/showbeforupdata/${this.state._id}`)
      .then((res) => {
        console.log(res.data);
        const data = res.data[0];
        this.setState({
          fullName: data.fullName,
          email: data.email,
          mobileNumber: data.mobileNumber,
          address: data.address,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    // const b = this.state.data;
    return (
      <div className="edit-profile">
        <Navbar />
        <h2>Edit Your Profile</h2>
        <Container>
          <Form style={{ marginTop: "10%" }}>
            {/* <Button onClick={this.handleSubmit} variant="primary" type="submit">
             EDIT
          </Button> */}
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Full Name</Form.Label>
                <Input
                  type="text"
                  name="fullName"
                  value={this.state.fullName}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Email</Form.Label>
                <Input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Mobile Number</Form.Label>
                <Input
                  type="number"
                  maxLength="10"
                  minLength="10"
                  name="mobileNumber"
                  value={this.state.mobileNumber}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Address</Form.Label>
                <Input
                  type="text"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>
            <Button
              onClick={this.handleSubmitSave}
              variant="primary"
              type="submit"
            >
              SAVE
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default CustomerProfile;
//check and validate
