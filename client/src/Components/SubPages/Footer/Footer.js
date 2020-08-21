//import used technologies
import React, { Component } from "react";
// import linked from "https://res.cloudinary.com/dtm3d0erl/image/upload/v1598029910/mxy6ktntldyhxx3y67k8.png";
// import face from "https://res.cloudinary.com/dtm3d0erl/image/upload/v1598029911/bjjjrd0irryi7ch0xflw.png";
// import insta from "https://res.cloudinary.com/dtm3d0erl/image/upload/v1598029914/lti259aaljekwf7je0uq.png";
// import twitter from "https://res.cloudinary.com/dtm3d0erl/image/upload/v1598029913/rlvriotqakti9rhmfkpk.png";
// import Whatsapp from "https://res.cloudinary.com/dtm3d0erl/image/upload/v1598029911/rnoiu6dwvw3h3htubejs.png";
//import used css
import "./Footer.css";
//import used files
//create Footer Compo
export class Footer extends Component {
  //render Footer Compo
  render() {
    return (
      <div className="footer">
        <div className="inner-footer">
          <div className="footer-items">
            <h1>Raha </h1>
            <p>
              RahaApp is a simple booking application. Allows you to book a
              beach facility suits your need and show services you would to have
              during your sea trip
            </p>
          </div>
          ​
          <div className="footer-items">
            <h2> QUICK LINKS </h2>
            <div className="border"></div>
            <ul>
              <a href="/">
                <li>HOME</li>
              </a>
              <a href="/resorts">
                <li>RESORTS</li>
              </a>
              <a href="/about">
                <li>ABOUT US</li>
              </a>
              <a href="/contact">
                <li>CONTACT</li>
              </a>
            </ul>
          </div>
          ​
          <div className="footer-items">
            <h2>Contact Us</h2>
            <div className="border"></div>
            <ul>
              <li>
                <i className="fa fa-map-marker" aria-hidden="true"></i>REMAL,
                GAZA , PALSTINE.
              </li>
              <li>
                <i className="fa fa-phone" aria-hidden="true"></i>(+970) 59 998
                4035
              </li>
              <li>
                <i className="fa fa-envelope" aria-hidden="true"></i>
                ra77a99@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <ul>
              <li>
                <a href="http://www.facebook.com" target="_blanck">
                  <img src="https://res.cloudinary.com/dtm3d0erl/image/upload/v1598029911/bjjjrd0irryi7ch0xflw.png"alt="face icon" />
                </a>
              </li>
              <li>
                <a href="http://www.instgram.com" target="_blanck">
                  <img src="https://res.cloudinary.com/dtm3d0erl/image/upload/v1598029914/lti259aaljekwf7je0uq.png" alt="instgram icon" />
                </a>
              </li>
              <li>
                <a href="http://www.twitter.com" target="_blanck">
                  <img src= "https://res.cloudinary.com/dtm3d0erl/image/upload/v1598029913/rlvriotqakti9rhmfkpk.png"alt="twitter icon" />
                </a>
              </li>
              <li>
                <a href="http://www.linkedin.com" target="_blanck">
                  <img src="https://res.cloudinary.com/dtm3d0erl/image/upload/v1598029910/mxy6ktntldyhxx3y67k8.png" alt="linkedin icon" />
                </a>
              </li>
              <li>
                <a href="https://wa.me/972595167571" target="_blanck">
                  <img src= "https://res.cloudinary.com/dtm3d0erl/image/upload/v1598029911/rnoiu6dwvw3h3htubejs.png" alt="WhatsApp icon" />
                </a>
              </li>
            </ul>
          </div>
          Copyright &copy; 2020 - <b>Raha App</b>. All Rights Reserved.
          Developed By <b> INVINCIBLE ENGINEERS ❤</b>
        </div>
      </div>
    );
  }
}
//export Footer Compo
export default Footer;
