//import used technologies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as emailjs from "emailjs-com";
import nodemailer from "nodemailer";

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
 
  // onSubmitEmail = ()=>{
  //   var obj = new XMLHttpRequest();
  //   obj.onreadystatechange = ()=>{
  //     if(obj.readyState == 4){
  //       if(obj.status == 200){
  //         var x = JSON.parse(obj.responseText);
  //         alert(x.message);
  //       }
  //       else{
  //         alert("XMLHttp Status :" +obj.status +" "+obj.statusText)
  //       }
  //     }
  //   }
  //   // obj.open("post", form.action , true);
  //   // obj.setRequestHeader("Content-Type","application/json");
  //   // obj.send(JSON.stringify({
  //   //   name:form.name.value,
  //   //   email:form.email.value,
  //   //   message:form.message.value
  //   // }))
  //   return false;
  // }
  //render Contact Compo
  render() {
    return (
        
<div>
  <h1>Home Page</h1>
	<p><a href="#contact-id">click here for the contact form</a></p>
	<div class="contact" id="contact-id">
		<section><a href="#!">[ close ]</a></section>
		<form action="/ajax/email" class="contact-form" method="POST" onsubmit="return submitEmailForm(this);">
			<div>
				<input type="text" name="name" placeholder="name" class="contact-form-input" required />
			</div>
			<div>
				<input type="email" name="email" placeholder="email" class="contact-form-input" required />
			</div>
			<div>
				<textarea name="message" class="contact-form-input" placeholder="MESSAGE" required></textarea>
			</div>
			<div>
				<button type="submit">send</button>
			</div>
		</form>
	</div>
</div>
    );
  }
}
//render About Compo
export { Contact };

//Check and vaildate
