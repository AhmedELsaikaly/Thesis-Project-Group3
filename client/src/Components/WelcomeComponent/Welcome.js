//import used technologies
import React from "react";
import logo from "./Logo.png";
//import CSS
import "./Welcome.css";
//create Welcome Compo
class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  //render LandPage Compo
  render() {
    return (
      <div className="Welcome">
        <section id="title">
          <div>
            <h4>Welcome To</h4>
            <img src={logo} />
            <h1>Raha Website</h1>
          </div>
        </section>
        <section id="home-info" className="bg-muted">
          <div className="info-img"></div>
          <div className="info-content">
            <h2>
              <span className="text-dark">About Us</span>
            </h2>
            <p>
              To meet your needs of Gaza's Seaside, Raha App, is pleased to
              offer the largest and extensive beach facilities refernce in Gaza
              strip, which can Helps You Stick to Your Desires.
            </p>
            <button type="button" className="btn btn-primary">
              <a className="button" href="/about">
                <span className="text-white"> Read More </span>
              </a>
            </button>
          </div>
        </section>
      </div>
    );
  }
}
//export compo
export default Welcome;

//Check and vaildate
