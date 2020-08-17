//import used technologies
import React from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../SubPages/Footer/Footer";

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
    const form = await axios
      .post("/form", { name, email, message })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  //render Contact Compo
  render() {
    return (
      <div className="site-section site-section-sm">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8 mb-5">
              <form onSubmit={this.handleSubmit} className="p-5 bg-white">
                <h1>Get in Touch</h1>
                <div className="row form-group">
                  <div className="col-md-12 mb-3 mb-md-0">
                    <label className="font-weight-bold" for="fullname">
                      Full Name
                    </label>
                    <input
                      name="name"
                      value={this.state.name}
                      type="text"
                      id="fullname"
                      className="form-control"
                      placeholder="Your Full Name"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="font-weight-bold" for="address">
                      Email
                    </label>
                    <input
                      name="email"
                      value={this.state.email}
                      type="text"
                      id="address"
                      className="form-control"
                      placeholder="Your Home Address"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="font-weight-bold" for="message">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={this.state.message}
                      id="message"
                      rows="4"
                      className="form-control w-100"
                      placeholder="Your message to us..."
                      onChange={this.handleChange}
                    ></textarea>
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <input
                      type="submit"
                      value="Send Message"
                      className="btn btn-primary pill px-4 py-2"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4" id="contactUs">
              <div className="p-4 mb-3 bg-white">
                <h1 className="ours">Contact Info</h1>
                <p className="mb-0 font-weight-bold">Address</p>
                <p className="mb-4">REMAL, GAZA , PALESTINE</p>
                <p className="mb-0 font-weight-bold">Phone</p>
                <p className="mb-4">(+970) 59 998 4035</p>
                <p className="mb-0 font-weight-bold">Email Address</p>
                <p className="mb-0">ra77a99@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
//render About Compo
export default Contact;

//Check and vaildate
