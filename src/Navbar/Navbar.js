import React from "react";
// import back from "./../back.jpg";
import "./style.css";
// import "./style.css";
import { Link, Redirect } from "react-router-dom";
class NavBar extends React.Component {
  state = {};

  render() {
    return (
      <div className="NavBar__div">
      <nav className="nav">
        <div className="container">
          <div className="logo">
            <span>Ra7a</span> 
          </div>
          <div className="main_list" id="mainListDiv">
            <ul>
              <Link to="/signUp">
                <li>Sign Up </li>
              </Link>
              <Link to="/signIn">
                <li>Sign in </li>
              </Link>
              <Link to="/about">
                <li>about us </li>
              </Link>
              <Link to="/contact">
                <li>contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    );
  }
}
export default NavBar;
