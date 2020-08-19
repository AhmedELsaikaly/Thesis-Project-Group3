//import used technologies
import React from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import logo from "./Logo.png";
import { toast } from "react-toastify";
//import CSS
import "./InternalNavControl.css";

//import used files

//create NavBar Compo
class InternalNav extends React.Component {
  //render NavBar Compo
  constructor(props) {
    super(props);
    this.state = {};
  }
  logout = () => {
    toast("Success! Logging out, Thank you❤", { type: "success" });
    localStorage.removeItem("ownertoken");
  };
  render() {
    // console.log(this.props);
    return (
      <section id="nav-bar">
        <nav
          style={{ marginBottom: "-10px" }}
          className="navbar navbar-expand-lg navbar-light"
        >
          <a className="navbar-brand" href="#">
            <img src={logo} />
          </a>
          <h1>Raha</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  CONTACT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  ABOUT US
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/" onClick={this.logout}>
                  LOGOUT
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    );
  }
}

//export compo
export default InternalNav;

//Check and vaildate
