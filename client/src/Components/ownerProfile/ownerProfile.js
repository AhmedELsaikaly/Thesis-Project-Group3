import React, { Component } from "react";
import { Form, Button,FormGroup, ControlLabel } from "react-bootstrap";
import {Input} from "reactstrap";
import { Grid, Row, Col } from 'react-bootstrap';
import  axios from "axios";


<<<<<<< HEAD

export class OwnerProfile extends Component {
  constructor(){
    super()
    this.state={
      fullName:"",
      email:"",
      area:"",
      mobileNumber:"",
      placeName:"",
      license:""

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 
 
  }
  handleChange =(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
 
  async handleSubmit (e){
   e.preventDefault()
  //  const {fullName,email,area,mobileNumber}= this.state;
  //  const form = await axios.put('/form',{name,email,message})
  }
=======
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
 

>>>>>>> ebc564cb1ee5af7f95f948e0577fc29a3739cafd
  render() {
    // const b = this.state.data;
    return (
      <div>
<<<<<<< HEAD
        <Form onSubmit={this.handleSubmit} style={{marginLeft:"7%",marginTop:"10%",maxWidth:'80%'}}>
          <Form.Row>
            <Form.Group as={Col} >
              <Form.Label>Full Name</Form.Label>
              <Input
               type="text"
               value={this.state.fullName}
               onChange={this.handleChange}
                 />
            </Form.Group>

            <Form.Group as={Col} >
              <Form.Label>Email</Form.Label>
              <Input 
              type="email" 
              value={this.state.email}
              onChange={this.handleChange}
               />
            </Form.Group>

            <Form.Group as={Col} >
              <Form.Label>Mobile Number</Form.Label>
              <Input
               type="number"
               maxLength="10"
               minLength="10"
               value={this.state.mobileNumber}
               onChange={this.handleChange}
          />
            </Form.Group>
          </Form.Row>
          <Form.Row>
          <Form.Group as={Col} >
              <Form.Label>area</Form.Label>
              <Input 
                type="text"
                value={this.state.area}
                onChange={this.handleChange}
                 />
            </Form.Group>

            <Form.Group as={Col} >
              <Form.Label>Place Name</Form.Label>
              <Input 
                type="text"
                value={this.state.placeName}
                onChange={this.handleChange}
                 />
            </Form.Group>

            <Form.Group as={Col} >
              <Form.Label>License</Form.Label>
              <Input 
                type="file"
                value={this.state.license}
                onChange={this.handleChange}
                 />
            </Form.Group>
          </Form.Row>
          <Button variant="primary" type="submit">
             SAVE
          </Button>
=======
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
>>>>>>> ebc564cb1ee5af7f95f948e0577fc29a3739cafd
  </Form>
      </div>
    );
  }
}


export default OwnerProfile;
