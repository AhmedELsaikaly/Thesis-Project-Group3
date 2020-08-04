import React from "react";
import { Filtter } from "./fillter";

import { Link } from "react-router-dom";
import "./style.css";

var axios = require("axios");

class UserPage extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmet = this.handleSubmet.bind(this);
  }
  componentDidMount() {
    this.handleSubmet();
  }

  handleSubmet = () => {
    axios
      .get("/")
      .then(function (response) {
        // this.setState({ data: response.data });
        // handle success
        // console.log(response);
      })
      .catch(function (error) {
        // handle error
        // console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
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
                <Link to="/reservation">
                  <li>Reservation</li>
                </Link>
              </ul>
            </div>
            <br></br>
            <br></br>

            <Filtter />
          </div>
        </nav>
      </div>
    );
  }
}
export { UserPage };
