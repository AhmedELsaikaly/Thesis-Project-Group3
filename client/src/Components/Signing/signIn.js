import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar.js";
import axios from "axios";
import "./signIn.css";
//import CSS

//import used files

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      input: {
        email: "",
        password: "",
      },
      errors: {},
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    let input = this.state.input;
    input[e.target.name] = e.target.value;

    this.setState({
      input,
    });
  };
  //validate
  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;
    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email .";
    }
    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }
    this.setState({
      errors: errors,
    });

    return isValid;
  }

  //handleSubmit function

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      let input = {};
      input["password"] = "";
      input["email"] = "";
      this.setState({ input: input });
      axios
        .post("http://localhost:5000/loginCustomer", {
          password: this.state.password,
          email: this.state.email,
        })
        .then((response) => {
          console.log(response);
          // alert("sign up success please sign in");
          // console.log("result   ", res);
          // this.setState({ singup: "sign up success please sign in" });
          this.props.history.push(`/`);
        })
        .catch((err) => {
          // alert("please use a different email or user name");
          console.log("ERROR FROM AXIOS ", err.response.data);
          this.props.history.push(`/signUp`);
        });
    }
  };

  render() {
    return (
      <div className="login-form">
        <form>
          <div className="avatar">
            <i className="material-icons">&#xE7FF;</i>
          </div>
          <h4 className="modal-title">Login to Your Account</h4>
          <div className="text-danger">{this.state.errors.email}</div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              name="email"
              onChange={this.handleChange}
              value={this.state.input.email}
            />
          </div>
          <div className="text-danger">{this.state.errors.email}</div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              value={this.state.input.Password}
              placeholder="Password"
              onChange={this.handleChange}
            />
          </div>
          {/* <div className="form-group small clearfix">
            <label className="checkbox-inline">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-link">
              Forgot Password?
            </a>
          </div> */}
          <input
            type="submit"
            className="btn btn-primary btn-block btn-lg"
            value="Login"
            onClick={this.handleSubmit}
          />
        </form>
        <div className="text-center large">
          Don't have an account? <a href="/signUp">Sign up</a>
        </div>
      </div>
    );
  }
}
export { SignIn };
