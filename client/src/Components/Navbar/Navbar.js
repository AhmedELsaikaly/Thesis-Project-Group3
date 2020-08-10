//import used technologies
import React from "react";
import { Link, Redirect } from "react-router-dom";

//import CSS
import "./NavBar.css";

//import used files

//create NavBar Compo
class NavBar extends React.Component {
  state = {};

  //render NavBar Compo
  render() {
    return (
      <div className="NavBar__div">
        <nav className="nav">
          <div className="container">
            <div className="main_list" id="mainListDiv">
              <ul>
                <li>
                  <span className="Logo">Ra7a</span>
                </li>
                <Link to="/">
                  <li className="lia">Home </li>
                </Link>
                <Link to="/signUp">
                  <li className="lia">Sign Up </li>
                </Link>
                <Link to="/signIn">
                  <li className="lia"> Sign in </li>
                </Link>

                <Link to="/about">
                  <li className="lia">About Us </li>
                </Link>
                <Link to="/contact">
                  <li className="lia">Contact Us</li>
                </Link>
<<<<<<< HEAD
                <Link to="/userReservation">
=======
                <Link to="/Policy">
                  <li className="lia">Policy</li>
                </Link>
                {/* <Link to="/contact">
>>>>>>> 0089ad7103d34e919a0f963220893bd0972befd9
                  <li>My Reservations</li>
                </Link>
                <Link to="/customerProfile">
                  <li>My profile</li>
                </Link> */}

                <Link to="/customerProfile">
                  <li className="lia">My profile</li>
                </Link>

                <Link to="/logout">
                  <li className="lia">Logout</li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

//export compo
export default NavBar;

//Check and vaildate
