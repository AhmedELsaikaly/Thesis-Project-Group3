//import used technologies
import React, { Component } from "react";
import axiox from "axios";
import jwt_decode from "jwt-decode";

//import CSS

//import used files
import ResList from "./resList.js";

//FackeData Array
//create UserReservation Compo
export class UserReservation extends Component {
  state = {
    customerId: "",
    reservations: [],
  };

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({ customerId: decoded.id });
  }
  handleSubmit(e) {
    // e.preventDefault();

    axiox
      .get(`http://localhost:3000/reservationCustomer/${this.state.customerId}`) // Fix the route
      .then((result) => {
        const data = result.data;
        this.setState({ reservations: data });
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }
  //render UserReservation Compo
  render() {
    return (
      <div>
        <button onClick={this.handleSubmit.bind(this)}>
          Show all your reservations
        </button>
        <h1>Hello</h1>
        <ResList reservations={this.state.reservations} />
      </div>
    );
  }
}

//export UserReservation Compo
export default UserReservation;

//Check and validate
