import React from "react";
import { Link } from "react-router-dom";
import axios from "axios"

//import CSS
import "./signUp.css";

//import used files
import Navbar from "../Navbar/Navbar.js";
// const axios = require("axios");
///////////////////////////////////

////////////  Customer  ///////////

///////////////////////////////////
class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  //handleSubmit function

  handleSubmit(e) {
  
    const { email, password } = this.state;
    axios
      .post(
        `http://localhost:5000/loginCustomer`,
        {
          user: {
            email: email,
            password: password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data === true) {
          // this.props.setUserAuth(true);
          // this.props.history.push('/auth/Search');
        } else {
          alert('LogIn faild . . Make sure the information is correct');
        }
      })
      .catch((error) => {
        console.log('login error', error);
        // this.props.setUserAuth(false);
      });
    ///////////need axios ????
    console.log("The form was submitted with the following data:");
    console.log(this.state);
    e.preventDefault();
  }

  render() {
    return (
      <div className="singIn">
        <Navbar />
        <form
          onSubmit={this.handleSubmit}
          className="FormFields"
          onSubmit={this.handleSubmit}
        >
          <div className="FormField">
            <label>
              E-Mail Address
              <input
                type="email"
                id="email"
                className="FormField__Input"
                placeholder="Enter your email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div className="FormField">
            <label>
              Password
              <input
                type="password"
                id="password"
                className="FormField__Input"
                placeholder="Enter your password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign In</button>{" "}
            <Link to="/">Create an account</Link>
          </div>
        </form>
      </div>
    );
  }
}
export { SignIn };
