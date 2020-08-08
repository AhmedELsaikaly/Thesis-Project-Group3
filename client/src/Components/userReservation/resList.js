import React, { Component } from "react";
import { element } from "prop-types";
import "./resList.css";
export class ResList extends Component {
  state = {};
  render() {
    const { reservations } = this.props;
    return (
      <div>
        <h2>Card info</h2>
        <ul class="xd">
          {reservations.map((element, index) => {
            return (
              <div class="card-info">
                <li>Place: {element.placeName}</li>
                <li>Date: {element.date}</li>
                <li>Type: {element.type}</li>
                <li>Location: {element.location}</li>
                <li>Price: {element.price}</li>
                <li>Status: {element.status}</li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ResList;

// {arr.map((obj, i) => {
//     return (
//   <div>
//     <h2>{obj.customerName}</h2>
//     <h2>{obj.date}</h2>
//     <h2>{obj.phoneNumber}</h2>
//     <h2>{obj.status}</h2>
//     <h2>{obj.numberOfReservation}</h2>
//     <br></br>
//   </div>
//     );
//   })}
