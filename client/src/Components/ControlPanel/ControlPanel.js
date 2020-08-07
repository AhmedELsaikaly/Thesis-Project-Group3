//import used technologies
import React from "react";
import { Link, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";
//import CSS
import "./ControlPanel.css";

//import used files
import jessica from "./1.png";

//....................
// extracting the data from token

//create ContolPanel Compo
class ContolPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    console.log(decoded);
  }
  //render ContolPanel Compo
  render() {
    return (
      <div className="ConrolPanel">
        <input type="checkbox" id="check" />
        <header>
          <label htmlFor="check">
            <i className="fas fa-bars" id="sidebar_btn"></i>
          </label>
          <div className="left_area">
            <h3>
              Ra<span>7</span>ha
            </h3>
          </div>
          <div className="right_area">
            <a href="#" className="logout_btn">
              Logout
            </a>
          </div>
        </header>
        <div className="sidebar">
          <center>
            <img src={jessica} className="profile_image" alt="" />
            <h4>Jessica</h4>
          </center>
          <a href="/">
            <i className="fas fa-desktop"></i>
            <span>Dashboard</span>
          </a>
          <a href="/service">
            <i className="fas fa-cogs"></i>
            <span>Services</span>
          </a>
          <a href="/facility">
            <i className="fas fa-table"></i>
            <span>Facilities</span>
          </a>
          <a href="#">
            <i className="fas fa-th"></i>
            <span>Forms</span>
          </a>
          <a href="#">
            <i className="fas fa-info-circle"></i>
            <span>About</span>
          </a>
          <a href="#">
            <i className="fas fa-sliders-h"></i>
            <span>Settings</span>
          </a>
        </div>

        {/* <div className="content"></div> */}
      </div>
    );
  }
}
//export compo
export default ContolPanel;

//Check and vaildate
