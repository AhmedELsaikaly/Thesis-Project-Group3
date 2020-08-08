//import used technologies
import React, { Component } from "react";
import axiox from "axios";

//import CSS

//import used files
import bookingLiss, { BookingList } from "./bookingLiss.js";

//fakeData Array
const arr = [
  {
    id: 1,
    customerName: "mohammed",
    date: "8/7/2000",
    phoneNumber: 599000000,
    status: "pending",
    numberOfReservation: 4,
  },
  {
    id: 2,
    customerName: "yosif",
    date: "9/7/2000",
    phoneNumber: 4546456456,
    status: "finished",
    numberOfReservation: 2,
  },
  {
    id: 1,
    customerName: "sasda",
    date: "8/7/2300",
    phoneNumber: 5554499500000,
    status: "pending",
    numberOfReservation: 3,
  },
];

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
        <BookingList booking={arr} /> {/* FIX the arr to booking */}
      </div>
    );
  }
}
//export OwnerBooking Compo
export default OwnerBooking;

//check and validate
