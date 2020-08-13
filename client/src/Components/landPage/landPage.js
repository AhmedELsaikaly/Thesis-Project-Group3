//import used technologies
import React from "react";
import { Link } from "react-router-dom";

//import CSS
import "./landPage.css";

//import used files
import Navbar from "../Navbar/Navbar";
import Footer from "../SubPages/Footer/Footer.js";
import SliderCom1 from "./../slider/slider2";

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
        {/* <SliderCom /> */}
        {/* send the imageUrl array to sliderCom  */}
        <SliderCom1 />
        <Footer />
      </div>
    );
  }
}
//export compo
export default LandPage;

//Check and vaildate
