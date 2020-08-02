import React from "react";
import "./style.css";
import jessica from "./1.png";
import { Link, Redirect } from "react-router-dom";
class ContolPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
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
          <a href="/facility">
            <i className="fas fa-cogs"></i>
            <span>Components</span>
          </a>
          <a href="#">
            <i className="fas fa-table"></i>
            <span>Tables</span>
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

export default ContolPanel;
