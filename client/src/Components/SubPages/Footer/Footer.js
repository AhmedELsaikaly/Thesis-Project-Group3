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
              <a href="http://www.facebook.com" target="_blanck">
                <img src={face} alt="face icon" />
              </a>
            </li>
            <li>
              <a href="http://www.instgram.com" target="_blanck">
                <img src={insta} alt="instgram icon" />
              </a>
            </li>
            <li>
              <a href="http://www.twitter.com" target="_blanck">
                <img src={twitter} alt="twitter icon" />
              </a>
            </li>
            <li>
              <a href="http://www.linkedin.com" target="_blanck">
                <img src={linked} alt="linkedin icon" />
              </a>
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
