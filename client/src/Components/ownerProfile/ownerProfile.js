import React, { Component } from "react";
import { Form, Button,FormGroup, ControlLabel } from "react-bootstrap";
import {Input} from "reactstrap";
import { Grid, Row, Col } from 'react-bootstrap';
import  axios from "axios";



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
  render() {
    // const b = this.state.data;
    return (
      <div>
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
  </Form>
      </div>
    );
  }
}


export default OwnerProfile;
