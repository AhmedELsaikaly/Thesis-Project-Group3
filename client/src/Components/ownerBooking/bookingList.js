import React from "react";
import "./bookingList.css";

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
      <div className="BookingList_div">
        <table className="table table-striped table-bordered table-hover">
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
