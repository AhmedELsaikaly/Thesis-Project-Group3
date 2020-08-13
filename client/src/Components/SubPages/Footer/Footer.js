//import used technologies
import React, { Component } from "react";
import linked from "./in.png";
import face from "./face.png";
import insta from "./insta.png";
import twitter from "./twitter.png";

//import used css
import "./Footer.css";

//import used files

//create Footer Compo
export class Footer extends Component {
  //render Footer Compo
  render() {
    return (
      <div className="footer">
        <div className="container">
          <span>Copyright &copy; 2020 RahaApp</span>
          <ul>
            <li>
              <img src={face} alt="face icon" />
            </li>
            <li>
              <img src={insta} alt="instgram icon" />
            </li>
            <li>
              <img src={twitter} alt="twitter icon" />
            </li>
            <li>
              <img src={linked} alt="linkedin icon" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

//export Footer Compo
export default Footer;

//check and vaildate
