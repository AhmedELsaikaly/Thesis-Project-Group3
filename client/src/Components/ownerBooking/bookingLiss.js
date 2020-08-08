//import used technologies
import React, { Component } from "react";
import { element } from "prop-types";

//import CSS
import "./bookingList.css";

//create BookingList Compo
export class BookingList extends Component {
  state = {};

  //render BookingList Compo
  render() {
    const { booking } = this.props;
    return (
      <div class="form">
        <ul>
          {booking.map((element, index) => {
            return (
              <div class="xd">
                <li>{element.customerName}</li>
                <li>{element.date}</li>
                <li>{element.phoneNumber}</li>
                <li>{element.status}</li>
                <li>{element.numberOfReservation}</li>
                <br></br>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

//export BookingList Compo
export default BookingList;

//check and validate

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
