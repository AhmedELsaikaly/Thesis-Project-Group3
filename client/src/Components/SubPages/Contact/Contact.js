//import used technologies
import React from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Navbar from "../../Navbar/Navbar";

//import used css
import "./Contact.css";

//import used files

//create About Compo
class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;
    const form = await axios.post("/form", { name, email, message });
  }
  //render Contact Compo
  render() {
    return (
      <div className="custom-form">
        <Navbar />
        <Form
          className="test3"
          onSubmit={this.handleSubmit}
          style={{ marginLeft: "20%", marginTop: "10%", maxWidth: "50%" }}
        >
          <FormGroup>
            <Label for="name">Name:</Label>
            <Input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="email">Email:</Label>
            <Input
              type="Email"
              value={this.state.email}
              name="email"
              placeholder="Enter Your E-mail"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="message">Message:</Label>
            <Input
              type="textarea"
              name="message"
              placeholder="Write Your Message Here"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button>Send Your Message</Button>
        </Form>
      </div>
    );
  }
}
//render About Compo
export { Contact };

//Check and vaildate
