import React, { Component } from "react";
import axiox from "axios";
import ResList from "./resList.js";
const arr = [
  {
    id: 1,
    placeName: "mohammed",
    date: "8/7/2000",
    type: 599000000,
    location: "Gaza",
    price: 4,
    status: "finished",
  },
  {
    id: 2,
    placeName: "yosif",
    date: "9/7/2000",
    type: 4546456456,
    location: "Gazad",
    price: 2,
    status: "finished",
  },
  {
    id: 1,
    placeName: "sasda",
    date: "8/7/2300",
    type: 5554499500000,
    location: "Gaza",
    price: 3,
    status: "finished",
  },
  {
    id: 1,
    placeName: "sasda",
    date: "8/7/2300",
    type: 5554499500000,
    location: "Gaza",
    price: 3,
    status: "finished",
  },
  {
    id: 1,
    placeName: "sasda",
    date: "8/7/2300",
    type: 5554499500000,
    location: "Gaza",
    price: 3,
    status: "finished",
  },
  {
    id: 1,
    placeName: "sasda",
    date: "8/7/2300",
    type: 5554499500000,
    location: "Gaza",
    price: 3,
    status: "finished",
  },
  {
    id: 1,
    placeName: "sasda",
    date: "8/7/2300",
    type: 5554499500000,
    location: "Gaza",
    price: 3,
    status: "finished",
  },
];

export class UserReservation extends Component {
  state = {
    reservations: [],
  };

  handleSubmit(e) {
    // e.preventDefault();

    axiox
      .get("http://localhost:3000/FIX_ME") // Fix the route
      .then((result) => {
        const data = result.data;
        this.setState({ reservations: data });
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleSubmit.bind(this)}>
          Show all your reservations
        </button>
        <h1>Hello</h1>
        <ResList reservations={arr} /> {/* FIX the arr to booking */}
      </div>
    );
  }
}

export default UserReservation;
