//import used technologies
import React from "react";
import { Link } from "react-router-dom";

//import CSS
import { SliderCom } from "./../slider/slider";
import "./landPage.css";

//import used files
import Navbar from "../Navbar/Navbar";
import one from "./one.jpg";
import two from "./two.jpg";
import three from "./three.jpg";
import four from "./four.jpg";
import five from "./five.jpg";
import { SignIn } from "../Signing/signIn";
import Footer from "../SubPages/Footer/Footer.js";

//create LandPage Compo
class LandPage extends React.Component {
  constructor() {
    super();
    this.state = {
      // imgUrl: [one, two, three, four, five],
    };
  }
  //render LandPage Compo
  render() {
    return (
      <div className="container">
        <Navbar />
        <SliderCom />
        {/* send the imageUrl array to sliderCom  */}
        <Footer />
      </div>
    );
  }
}
//export compo
export default LandPage;

//Check and vaildate
