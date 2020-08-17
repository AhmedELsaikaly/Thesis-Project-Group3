//import used technologies
import React from "react";
import jwt_decode from "jwt-decode";
//import CSS
import "./ControlPanel.css";

import axios from "axios";

//import used files
import jessica from "./1.png";

// extracting the data from token

//create ContolPanel Compo
class ContolPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      _id: "",
      fullName: "",
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      _id: decoded.id,
      fullName: "",
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState._id !== this.state._id) {
      this.handleSubmit();
    }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = () => {
    axios
      .get(`/Owner/${this.state._id}`)
      .then((res) => {
        console.log(res.data);
        const data = res.data[0];
        this.setState({
          fullName: data.fullName,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //render ContolPanel Compo
  render() {
    return (
      <div className="ConrolPanel">
        <input type="checkbox" id="check" />
        <header>
          <br />
          <div className="left_area" style={{ marginLeft: "5%" }}>
            <h3>
              Ra<span>7</span>ha
            </h3>
          </div>
          <div className="right_area">
            <a href="/logout" className="logout_btn">
              Logout
            </a>
          </div>
        </header>
        <div className="sidebar">
          <center style={{ marginLeft: "-5%" }}>
            <img src={jessica} className="profile_image" alt="" />

            <h4 style={{ lineHeight: "60px", color: "#fff" }}>
              {" "}
              Hi {this.state.fullName}
            </h4>
          </center>
          <a href="/">
            <i className="fas fa-desktop"></i>
            <span>Home Page</span>
          </a>
          <a href="/service">
            <i className="fas fa-cogs"></i>
            <span>Services</span>
          </a>
          <a href="/facility">
            <i className="fas fa-table"></i>
            <span>Facilities</span>
          </a>
          <a href="/ownerProfile">
            <i className="fas fa-th"></i>
            <span>My Profile</span>
          </a>
          <a href="/ownerBooking">
            <i className="fas fa-info-circle"></i>
            <span>Bookings</span>
          </a>
        </div>
      </div>
    );
  }
}
//export compo
export default ContolPanel;

//Check and vaildate
