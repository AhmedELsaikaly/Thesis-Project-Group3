//import used technologies
import React, { Component } from "react";
import axiox from "axios";
import jwt_decode from "jwt-decode";

//import CSS

//import used files
import bookingLiss, { BookingList } from "./bookingLiss.js";

//fakeData Array

//create OwnerBooking Compo
export class OwnerBooking extends Component {
  state = {
    booking: [],
    ownerId: "",
    error: "",
  };

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({ ownerId: decoded.id });
  }

  handleSubmit(e) {
    e.preventDefault();
    //axios getting data from booking
    axiox
      .get(`http://localhost:3000/OwnerBookings/${this.state.ownerId}`) // Fix the route
      .then((result) => {
        console.log(result);
        if (result.status === 200 && result.data.result.length > 0) {
          const data = result.data.result;
          console.log("1111111111111111111111111111111", result);
          this.setState({ booking: data });
        } else {
          this.setState({ error: "There is no Booking for you" });
        }
        // const data = result.data.result;
        // console.log("1111111111111111111111111111111", result);
        // this.setState({ booking: data });
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }

  //render OwnerBooking Compo
  render() {
    return (
      <div>
        <button onClick={this.handleSubmit.bind(this)}>Show all booking</button>
        <h1>Hello</h1>
        <BookingList booking={this.state.booking} />
        <div>{this.state.error}</div>
      </div>
    );
  }
}
//export OwnerBooking Compo
export default OwnerBooking;

//check and validate
