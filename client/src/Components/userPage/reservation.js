import React from "react";

// import "./style.css";
import axios from "axios";
import jwt_decode from "jwt-decode";

class Reservation extends React.Component {
  constructor() {
    super();
    this.state = {
      date: "",
      customerId: "",
      resType: "",
      fullName: "",
      ownerId: "",
      errors: [],
    };
  }
  validate() {
    let isValid = true;
    let errors = [];
    if (this.state.resType === "") {
      isValid = false;
      errors.push("please fill the reservation type");
    }
    if (this.state.date === "") {
      isValid = false;
      errors.push("please fill the reservation Dates");
    }
    this.setState({
      errors: errors,
    });

    return isValid;
  }
  change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.date, "ddddd", e.target.value);
  };
  componentDidMount() {
    // this.setState({ ownerId: this.props.OwnerId });
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    console.log(decoded);
    this.setState({
      customerId: decoded.id,
      fullName: decoded.fullName,
      mobileNumber: decoded.mobileNumber,
    });
    // console.log(decoded.id);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.ownerId !== this.props.ownerId) {
      this.setState({ ownerId: nextProps.ownerId });
    }
  }
  addReserve = (e) => {
    e.preventDefault();
    if (this.validate()) {
      this.setState({
        errors: [],
      });
      axios
        .post(`http://localhost:5000/addReservation`, {
          customerId: this.state.customerId,
          customerName: this.state.fullName,
          date: this.state.date,
          mobileNumber: this.state.mobileNumber,
          type: this.state.resType,
          ownerId: this.state.ownerId,
        })
        .then((res) => {
          console.log(res, "ppppp");
        })
        .catch((err) => {
          console.log("ERROR from AXIOS =>", err);
        });
    } else {
    }
  };
  render() {
    return (
      <div>
        <div>
          {this.state.errors.map((element, index) => (
            <div className="text-danger">{element}</div>
          ))}
          <select
            id="SelectOptions"
            className="mdb-select md-form"
            searchable="Search here.."
            name="resType"
            style={{ marginLeft: "80px", marginBottom: "100px" }}
            value={this.state.resType}
            onChange={this.change}
          >
            <option value="">Select one</option>
            <option value="table">Table</option>
            <option value="SmallTents">Small Tents</option>
            <option value="LargeTents"> Large Tents</option>
          </select>

          <button
            style={{ margin: "60px" }}
            type="button"
            class="btn btn-primary"
            data-toggle="button"
            aria-pressed="false"
            autocomplete="off"
            onClick={this.addReserve}
          >
            resirve
          </button>
          <input
            style={{ margin: "60px" }}
            className="depart input1"
            type="date"
            value={this.state.date}
            onChange={this.change}
            name="date"
          />
        </div>
      </div>
    );
  }
}
export default Reservation;
