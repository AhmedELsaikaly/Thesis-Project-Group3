//import used technologies
import React, { Component } from "react";

//import CSS
import "./resList.css";

//import used files

//create UserReservation Compo
export class ResList extends Component {
  state = {};

  //render UserReservation Compo
  render() {
    console.log(this.props.reservations);
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
                <li>Mobile Number: {element.mobileNumber}</li>
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
//export UserReservation Compo
export default ResList;

//Check and validate

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
