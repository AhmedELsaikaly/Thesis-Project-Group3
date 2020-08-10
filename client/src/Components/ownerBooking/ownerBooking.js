//import used technologies
import React, { Component } from "react";
import axiox from "axios";

//import CSS

//import used files
import bookingLiss, { BookingList } from "./bookingLiss.js";

//fakeData Array

//create OwnerBooking Compo
export class OwnerBooking extends Component {
  state = {
    booking: [],
  };

  handleSubmit(e) {
    // e.preventDefault();

    //axios getting data from booking
    axiox
      .get("http://localhost:3000/FIX_ME") // Fix the route
      .then((result) => {
        const data = result.data;
        this.setState({ booking: data });
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
        <BookingList booking={this.state.booking} />{" "}
        {/* FIX the arr to booking */}
      </div>
    );
  }
}
//export OwnerBooking Compo
export default OwnerBooking;

//check and validate
