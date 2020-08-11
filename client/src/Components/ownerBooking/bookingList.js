import React from "react";
import "./bookingList.css";
import axiox from "axios";
import jwt_decode from "jwt-decode";
class BookingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderTableData = () => {
    return this.props.bookings.map((booking, index) => {
      const { type, customerName, mobileNumber, date } = booking;
      return (
        <tr key={index}>
          <td>{type}</td>
          <td>{customerName}</td>
          <td>{mobileNumber}</td>
          <td>{date.substring(0, 10)}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="Booking_div">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">type</th>
              <th scope="col">customerName</th>
              <th scope="col">MobileNumber</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}
export default BookingList;
