import React from "react";
import "./bookingList.css";
import axiox from "axios";
import jwt_decode from "jwt-decode";
import BookingList from "./bookingList";
import ContolPanel from "../ControlPanel/ControlPanel";
class OwnerBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
      ownerId: "",
      error: "",
      date: "",
      facilitesCount: { LargeTents: 0, SmallTents: 0, table: 0 },
      reservationCount: { LargeTents: [], SmallTents: [], table: [] },
      isClicked: false,
      clickedElement: "",
    };
  }
  //import CSS
  //import used files
  //create OwnerBooking Compo
  componentDidMount() {
    const token = localStorage.ownertoken;
    const decoded = jwt_decode(token);
    this.setState({ ownerId: decoded.id });
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
      reservationCount: { LargeTents: [], SmallTents: [], table: [] },
    });
  };
  handleClick = (e) => {
    e.preventDefault();
    this.setState({ clickedElement: e.target.name, isClicked: true });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      error: "",
    });
    axiox
      .get(`http://localhost:5000/getResByDateOwner`, {
        params: {
          ownerId: this.state.ownerId,
          date: this.state.date,
        },
      })
      .then((result) => {
        if (
          result.data === "there is no reservation in this date" &&
          result.status === 200
        ) {
          this.setState({
            error: "There is no reservation in this date",
            isClicked: false,
            bookings: [],
            reservationCount: { LargeTents: [], SmallTents: [], table: [] },
          });
        } else {
          var reservationCount = this.state.reservationCount;
          result.data.reservation.forEach((element) => {
            reservationCount[element.type].push(element);
          });
          this.setState({
            isClicked: false,
            reservationCount: reservationCount,
            bookings: result.data.reservation,
            facilitesCount: result.data.quant,
          });
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  renderTableData = () => {
    const keys = ["table", "SmallTents", "LargeTents"];
    return keys.map((element, index) => {
      const { table, SmallTents, LargeTents } = this.state.facilitesCount;
      // const { table, SmallTents, LargeTents } = this.state.reservationCount;
      return (
        <tr key={index}>
          <td>{element}</td>
          <td>{this.state.facilitesCount[element]}</td>
          <td>{this.state.reservationCount[element].length}</td>
          <td>
            {this.state.facilitesCount[element] -
              this.state.reservationCount[element].length}
          </td>
          <td>
            <button name={element} onClick={this.handleClick}>
              More Details
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <div>
          <ContolPanel />
        </div>
        <div className="Booking_div" style={{ marginTop: "-120%" }}>
          <input name="date" type="date" onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>display data</button>
          <table className="table table-striped table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Facility Type</th>
                <th scope="col">Total No.</th>
                <th scope="col">Reserved No</th>
                <th scope="col">Free NO.</th>
                <th scope="col">usersDetails</th>
              </tr>
            </thead>
            <tbody>{this.renderTableData()}</tbody>
          </table>
          <p className="text-danger">{this.state.error}</p>
          {this.state.isClicked === true ? (
            <BookingList
              bookings={this.state.reservationCount[this.state.clickedElement]}
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}
export default OwnerBooking;
