import React, { Component } from "react";
import axiox from "axios";
import jwt_decode from "jwt-decode";

import {
  Button,
  FormFeedback,
  Form,
  Col,
  FormGroup,
  Label,
  Input,
} from "reactstrap";



export class OwnerProfile extends Component {
 

  render() {
    // const b = this.state.data;
    return (
      <div>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>
          </Form.Row>
  </Form>
      </div>
    );
  }
}

export default OwnerProfile;
