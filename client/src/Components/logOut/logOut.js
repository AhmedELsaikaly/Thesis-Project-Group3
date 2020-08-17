// import React from "react";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import React from "react";
// import React from "react";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { toast } from "react-toastify";
import NavBar from "../Navbar/Navbar";
import Footer from "../SubPages/Footer/Footer.js";
import "react-toastify/dist/ReactToastify.css";
// import "./style.css";
toast.configure();
class LogOut extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  handleSubmit(token, addresses) {
    toast("Success! Logging out, Thank you❤", { type: "success" });
    localStorage.clear();
    this.props.history.push("/");
  }
  render() {
    return (
      <div>
        <NavBar />
        <div>
          <section id="visionMission">
            <div class="vision">
              <h2>Thank you for using our application, Hope you enjoy it.</h2>
            </div>
          </section>
          <button onClick={this.handleSubmit}>log</button>
        </div>
        <Footer />
      </div>
    );
  }
}
export { LogOut };
