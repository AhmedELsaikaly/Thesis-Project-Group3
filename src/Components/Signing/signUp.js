//import used technologies
import React from "react";
import { Link } from "react-router-dom";

//import CSS
import "./signUp.css";

//import used files
import Navbar from "../Navbar/Navbar.js";

const axios = require("axios");
//create signup compo
class SignUp extends React.Component {
  //constructor and state
  constructor(props) {
    super(props);
    //change to shcema
    this.state = {
      fullName: "",
      password: "",
      email: "",
      mobileNumber: "",
      gender: "",
      profileImg: "",
      address: "",
      singup: "",
    };
  }

  //handleChange function
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //handleSubmit function
  handleSubmit = (e) => {
    e.preventDefault();
    //axios routing , then and catch
    axios
      .post("/api/signup", {
        fullName: this.state.fullName,
        password: this.state.password,
        email: this.state.email,
        mobileNumber: this.state.mobileNumber,
        gender: this.state.gender,
        profileImg: this.state.profileImg,
        address: this.state.address,
      })
      .then((result) => {
        alert("sign up success please sign in");
        console.log("result   ", result);
        this.setState({ singup: "sign up success please sign in" });
        this.props.history.push(`/Signin`);
      })
      .catch((err) => {
        alert("please use a different email or user name");
        console.log("ERROR FROM AXIOS ", err);
        this.setState({ singup: "please use a different email or user name" });
        this.props.history.push(`/Signup`);
      });
  };

  // rendering the compo
  render() {
    const {
      fullName,
      password,
      email,
      mobileNumber,
      gender,
      profileImg,
      address,
    } = this.state;
    const values = {
      fullName,
      password,
      email,
      mobileNumber,
      gender,
      profileImg,
      address,
    };
    return (
      <div className="sign-up">
        <Navbar />
        <form id="signup" onSubmit={this.handleSubmit}>
          <h1 className="header"> Please sign up to continue </h1>
          <br />

          <label>
            Full Name
            <input
              className="fullname"
              type="text"
              placeholder="Enter You Full Name "
              defaultValue={values.fullName}
              id="fullName"
              name="fullName"
              onChange={this.handleChange}
            ></input>
          </label>
          <br></br>
          <label>
            Email
            <input
              className="email"
              type="email"
              placeholder="Enter Your email "
              defaultValue={values.email}
              id="email"
              name="email"
              onChange={this.handleChange}
            ></input>
          </label>
          <br></br>

          <label>
            Mobile Number
            <input
              className="mobile"
              type="number"
              placeholder="Enter Your Mobile Number "
              defaultValue={values.mobileNumber}
              id="mobile"
              name="mobile"
              onChange={this.handleChange}
            ></input>
          </label>
          <br></br>
          {/* <div className="checkbox">
         <h5>Grnder</h5>
          <label>
            <input
            name ="gender"
            type="checkbox" 
            value={this.state.gender}
            onChange={this.handleChange}
           
            />
            Male
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input 
             name ="gender"
             type="checkbox" 
             value={this.state.gender}
             onChange={this.handleChange}
             />
            Female
          </label>
        </div> */}
          <br></br>
          <label>
            Address
            <input
              className="address"
              type="text"
              placeholder="Enter Your Address "
              defaultValue={values.address}
              id="address"
              name="address"
              onChange={this.handleChange}
            ></input>
          </label>
          <br></br>
          <label>
            Profile Image
            <input
              className="profileImg"
              type="file"
              placeholder="Upload"
              defaultValue={values.profileImg}
              id="profileImg"
              name="profileImg"
              onChange={this.handleChange}
            ></input>
          </label>
          <br></br>
          <label>
            Password
            <input
              className="password"
              type="password"
              placeholder="Enter Your Password "
              defaultValue={values.password}
              id="password"
              name="password"
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Confirm Password
            <input
              className="confirm"
              type="password"
              placeholder="Enter Your Confirm Password "
              defaultValue={values.password}
              id="confirm"
              name="confirm"
              onChange={this.handleChange}
            ></input>
          </label>
          <button
            className="signup_button"
            onClick={this.handleSubmit.bind(this)}
          >
            Sign Up
          </button>
          <br />

          <button className="PTN">
            <Link to="/Signin"> Sign in </Link>
          </button>
        </form>
      </div>
    );
  }
}

//export compo
export { SignUp };

//Check and vaildate
