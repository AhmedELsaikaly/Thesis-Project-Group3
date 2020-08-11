//import used technologies
import React from "react";
import axiox from "axios";
import jwt_decode from "jwt-decode";

//import CSS
import "./bookingList.css";

//import used files

//create OwnerBooking Compo
class OwnerBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
      ownerId: "",
      error: "",
    };
  }

  // componentDidMount function
  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({ ownerId: decoded.id });
  }

  //componentDidUpdate function
  componentDidUpdate(prevProps, prevState) {
    if (prevState.ownerId !== this.state.ownerId) {
      this.GetData();
    }
  }

  // GetData function
  GetData() {
    //axios getting data from booking
    axiox
      .get(`http://localhost:5000/OwnerBookings/${this.state.ownerId}`) // Fix the route
      .then((result) => {
        console.log(result);
        if (result.status === 200 && result.data.result.length > 0) {
          const data = result.data.result;
          console.log("1111111111111111111111111111111", result);
          this.setState({ bookings: data });
        } else {
          this.setState({ error: "There is no Booking for you" });
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }

  //renderTableData function
  renderTableData = () => {
    return this.state.bookings.map((booking, index) => {
      const { type, customerName, mobileNumber, date } = booking;
      return (
        <tr key={index}>
          <td>{type}</td>
          <td>{customerName}</td>
          <td>{mobileNumber}</td>
          <td>{date.substring(0, 10)}</td>
          <td>
            <button>More Details</button>
          </td>
        </tr>
      );
    });
  };

  //render OwnerBooking Compo
  render() {
    return (
      <div className="Booking_div">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Facility Type</th>
              <th scope="col">customerName</th>
              <th scope="col">MobileNumber</th>
              <th scope="col">Date</th>
              <th scope="col">usersDetails</th>
            </tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

//export OwnerBooking Compo
export default OwnerBooking;

//Check and Validate
