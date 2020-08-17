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
      err: "",
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
          // console.log(result);
          if (result.data === "there is no booking") {
            console.log(result);
            this.setState({
              reservations: [],
              err: "There is No Reservation For You",
            });
          } else {
            console.log(result);
            const data = result.data;
            this.setState({ reservations: data });
          }
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
          <td>{element.placeName}</td>
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
          <div className="text-danger">{this.state.err}</div>
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
            {this.state.reservations.length >= 0 ? (
              <tbody>{this.renderTableData()}</tbody>
            ) : (
              <div></div>
            )}
            {/* <tbody>{this.renderTableData()}</tbody> */}
          </table>
        </div>
        <Footer />
      </div>
    );
  }
}

//export UserReservation Compo
export default UserReservation;
