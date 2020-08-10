//import used technologies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as emailjs from "emailjs-com";
import nodemailer from "nodemailer";
import axios from "axios"
import {
  Button,
  FormFeedback,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

//import used css
import "./Contact.css";

//import used files
import Navbar from "../../Navbar/Navbar.js";
import Footer from "../Footer/Footer.js";

//create About Compo
class Contact extends React.Component {
 constructor(){
   super()
   this.state={
     name:"",
     email:"",
     message:""
   }
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);


 }
 handleChange =(e)=>{
   this.setState({[e.target.name]:e.target.value})
 }

 async handleSubmit (e){
  e.preventDefault()
  const {name,email,message}= this.state;
  const form = await axios.post('/form',{name,email,message})
 }
  //render Contact Compo
  render() {
    return (
     <Form onSubmit={this.handleSubmit} style={{marginLeft:"20%",marginTop:"10%",maxWidth:'50%'}}>
       <FormGroup>
         <Label for="name">
          Name:
         </Label>
         <Input
         type="text"
         name="name"
         value={this.state.name}
         onChange={this.handleChange}
          />
       </FormGroup>
      
       <FormGroup>
         <Label for="email">
          Email:
         </Label>
         <Input
         type="Email"
         value={this.state.email}

         name="email"
         onChange={this.handleChange}
          />
       </FormGroup>

       <FormGroup>
         <Label for="message">
          Message:
         </Label>
         <Input
         type="textarea"
         name="message"
         value={this.state.message}

         onChange={this.handleChange}
          />
       </FormGroup>
       <Button>SEND</Button>
     </Form>
        
  
    );
  }
}
//render About Compo
export { Contact };

//Check and vaildate
