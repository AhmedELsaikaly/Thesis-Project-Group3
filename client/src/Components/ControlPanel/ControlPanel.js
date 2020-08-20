//import used technologies
import React from "react";
import jwt_decode from "jwt-decode";
//import CSS
import "./ControlPanel.css";
import { toast } from "react-toastify";
import axios from "axios";
import InternalNavControl from "./InternalNavControl/InternalNavControl";

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
    const token = localStorage.ownertoken;
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
        if (!res) {
          window.location.href = "/ownerProfile";
        }
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
  logout = () => {
    toast("Success! Logging out, Thank you❤", { type: "success" });
    localStorage.removeItem("usertoken");
  };

  //render ContolPanel Compo
  render() {
    return (
      <div className="ConrolPanel">
        <InternalNavControl />
        <div className="sidebar">
          <center style={{ marginLeft: "-5%" }}>
            <img src={jessica} className="profile_image" alt="" />

            <h4 style={{ lineHeight: "60px", color: "#fff" }}>
              {" "}
              Hi {this.state.fullName}
            </h4>
          </center>
          <a href="/ContolPanel">
            <i className="fas fa-th"></i>
            <span>Home</span>
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
