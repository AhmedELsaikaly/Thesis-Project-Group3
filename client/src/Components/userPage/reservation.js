import React from "react";

// import "./style.css";
import axios from "axios";
import jwt_decode from "jwt-decode";
import "./facility.css";
import { toast } from "react-toastify";
import { Form, Button, Navbar } from "react-bootstrap";
import { Input } from "reactstrap";
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
      serverErr: "",
    };
  }
  CheckDate = (inputDate) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    var CurrentDate = new Date();
    var GivenDate = new Date(inputDate);
    if (inputDate === today) {
      return true;
    }
    if (GivenDate > CurrentDate) {
      return true;
    } else {
      return false;
    }
  };
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
    this.setState({ [e.target.name]: e.target.value, serverErr: "" });
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
  componentDidUpdate(prevProps, prevState) {
    if (prevState.resType !== this.state.resType) {
      this.props.handleSelection(this.state.resType);
    }
  }
  addReserve = (e) => {
    e.preventDefault();
    if (this.CheckDate(this.state.date)) {
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
            placeName: this.props.PlaceName,
          })
          .then((res) => {
            if (
              res.data === "no available place" ||
              res.data === "There is no Facilities for this Owner to reserve"
            ) {
              this.setState({ serverErr: res.data });
            } else {
              toast("Success! Your Reserved Sucessfully", { type: "success" });
            }
          })
          .catch((err) => {
            console.log("ERROR from AXIOS =>", err);
          });
      }
    } else {
      this.setState({ serverErr: "Please Choose Date Today of After" });
    }
  };
  render() {
    return (
      <div>
        <div>
          <p3 style={{ fontSize: "18px", fontWeight: "500" }}>Select one </p3>
          {this.state.errors.map((element, index) => (
            <div className="text-danger">{element}</div>
          ))}
          <select
            id="SelectOptions"
            className="selectpicker show-tick"
            searchable="Search here.."
            name="resType"
            style={{
              marginLeft: "10%",
              marginBottom: "100px",
              width: "240px",
              fontSize: "18px",
            }}
            value={this.state.resType}
            onChange={this.change}
          >
            <option
              style={{
                fontWeight: "400",
                fontSize: "18px",
              }}
              value=""
              disabled
            >
              Select one
            </option>
            <option
              style={{
                fontWeight: "400",
                fontSize: "18px",
              }}
              value="table"
            >
              Table
            </option>
            <option
              style={{
                fontWeight: "400",
                fontSize: "18px",
              }}
              value="SmallTents"
            >
              Small Tents
            </option>
            <option
              style={{
                fontWeight: "400",
                fontSize: "18px",
              }}
              value="LargeTents"
            >
              {" "}
              Large Tents
            </option>
          </select>
          <input
            className="depart input1"
            type="date"
            value={this.state.date}
            onChange={this.change}
            name="date"
            style={{
              margin: "15px",
              marginTop: "5px",
              height: "50px",
              borderRadius: "5px",
              fontWeight: "400",
            }}
          />

          <Button
            onClick={this.addReserve}
            variant="primary"
            data-toggle="modal"
            data-whatever="@mdo"
            aria-pressed="false"
            type="button"
          >
            Book
          </Button>

          {/* </button> */}
          <div className="text-danger">{this.state.serverErr}</div>
        </div>
      </div>
    );
  }
}
export default Reservation;
