//import used technologies
import React from "react";
import { Link } from "react-router-dom";
import logo from "./Logo.png";
//import CSS
import "./InternalNav.css";

//import used files

//create NavBar Compo
class InternalNav extends React.Component {
  //render NavBar Compo
  render() {
    return (
      <section id="nav-bar">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="index.html">
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
                <a className="nav-link" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/resorts">
                  RESORTS
                </a>
              </li>
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
                <a className="nav-link" href="/customerProfile">
                  My Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="userReservation">
                  My Bookings
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
