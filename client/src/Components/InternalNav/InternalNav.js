//import used technologies
import React from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
// import logo from "https://res.cloudinary.com/dtm3d0erl/image/upload/v1598028349/qxlfxngk85zraezgxmsp.png";
import { toast } from "react-toastify";
//import CSS
import "./InternalNav.css";

//import used files

//create NavBar Compo
class InternalNav extends React.Component {
  //render NavBar Compo
  constructor(props) {
    super(props);
    this.state = {};
  }
  logout = () => {
    localStorage.removeItem("usertoken");
    window.location.href = `/`;
  };
  render() {
    console.log(this.props);
    return (
      <section id="nav-bar">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="/">
            <img src="https://res.cloudinary.com/dtm3d0erl/image/upload/v1598028349/qxlfxngk85zraezgxmsp.png" />
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
                  MY PROFILE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/userReservation">
                  My BOOKINGS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={this.logout}>
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
