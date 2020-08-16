//import used technologies
import React, { Component } from "react";
import "./userReservation.css";
import jwt_decode from "jwt-decode";
import axios from "axios";
import InternalNav from "../InternalNav/InternalNav";
import Footer from "../SubPages/Footer/Footer";
import SliderForPages from "../SliderForPages/SliderForPages";
class UserReservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerId: "",
      reservations: [],
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({ customerId: decoded.id });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.customerId !== this.state.customerId) {
      axios
        .get(
          `http://localhost:5000/reservationCustomer/${this.state.customerId}`
        ) // Fix the route
        .then((result) => {
          const data = result.data;
          this.setState({ reservations: data });
        })
        .catch((err) => {
          console.log("Error", err);
        });
    }
  }

  renderTableData = () => {
    return this.state.reservations.map((element, index) => {
      return (
        <tr key={index}>
          <td>{index}</td>
          <td>{element.ownerId}</td>
          <td>{element.type}</td>
          <td>{element.date}</td>
          <td>
            <button>
              <a href={`resort/${element.ownerId}`}>More Details</a>
            </button>
          </td>
        </tr>
      );
    });
  };

  //render UserReservation Compo
  render() {
    return (
      <div>
        <InternalNav />
        <SliderForPages head={"Your Reservation"} />
        <div className="UserReservationTable">
          <table className="table table-striped table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Facility Name</th>
                <th scope="col">Facility Type</th>
                <th scope="col">Reservation Date</th>
                <th scope="col">Resort Details</th>
              </tr>
            </thead>
            <tbody>{this.renderTableData()}</tbody>
          </table>
        </div>
        <Footer />
      </div>
    );
  }
}

//export UserReservation Compo
export default UserReservation;
