import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";
import { SliderCom } from "./../slider/slider";

import Navbar from "../Navbar/Navbar";
import one from "./one.jpg";
import two from "./two.jpg";
import three from "./three.jpg";
import four from "./four.jpg";
import five from "./five.jpg";

import { SignIn } from "../Signing/signIn";

class LandPage extends React.Component {
  constructor() {
    super();
    this.state = {
      imgUrl: [one, two, three, four, five],
    };
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <SliderCom url={this.state.imgUrl} /> {/* send the imageUrl array to sliderCom  */}
      </div>
    );
  }
}
export default LandPage;
