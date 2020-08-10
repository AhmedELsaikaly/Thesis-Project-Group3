import React, { Component } from "react";
import axiox from "axios";
import jwt_decode from "jwt-decode";

import "./ownerProfile.css";
import { element } from "prop-types";

export class OwnerProfile extends Component {
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
        .get(`http://localhost:5000/Owner/${this.state.id}`) // Fix the route
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
    return (
      <div>
        <div class="personal-info">
          <button>Edit</button>
          <h2>Full Name: {this.state.data.fullName}</h2>
          <h2>Email: {this.state.data.email}</h2>
          <h2>Place Name: {this.state.data.placeName}</h2>
          <h2>Mobile Number:{this.state.data.mobileNumber}</h2>
          <img
            class="card-img-top"
            src={this.state.data.licensePhoto}
            alt="Card image cap"
          ></img>
          <button>Save</button>
        </div>
      </div>
    );
  }
}

export default OwnerProfile;
