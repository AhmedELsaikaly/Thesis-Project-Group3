import React, { Component } from "react";
import axiox from "axios";
import jwt_decode from "jwt-decode";

import "./customerProfile.css";

export class CustomerProfile extends Component {
  state = {
    id: "",
    data: "",
  };
  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({ id: decoded.id });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.id !== this.state.id) {
      console.log("pokemons state has changed.");
      axiox
        .get(`http://localhost:5000/User/${this.state.id}`) // Fix the route
        .then((result) => {
          const data = result.data[0];
          console.log(data);
          this.setState({ data: data });
        })
        .catch((err) => {
          console.log("Error", err);
        });
    }
  }

  render() {
    // const b = this.state.data;
    console.log(this.state.data.result);
    return (
      <div>
        <div class="lll">
          <button>Edit</button>
          <h2>Full Name: {this.state.data.fullName}</h2>
          <h2>Email: {this.state.data.email}</h2>
          <h2>Address: {this.state.data.address}</h2>
          <h2>Mobile Number:{this.state.data.mobileNumber}</h2>
          <button>Save</button>
        </div>
      </div>
    );
  }
}

export default CustomerProfile;
