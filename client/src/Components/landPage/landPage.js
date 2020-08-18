//import used technologies
import React from "react";
import FeaturedResorts from "../FeaturedResorts/FeaturedResorts";
//import CSS
import "./landPage.css";
import InternalNav from "../InternalNav/InternalNav";

//import used files
import Welcome from "../WelcomeComponent/Welcome";
import Navbar from "../Navbar/Navbar";
import Footer from "../SubPages/Footer/Footer.js";
import Slider from "./../slider/slider";

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
      <div className="landPage">
        {localStorage.usertoken !== undefined ? <InternalNav /> : <Navbar />}
        <Slider />
        <Welcome />
        <FeaturedResorts />
        <Footer />
      </div>
    );
  }
}
//export compo
export default LandPage;

//Check and vaildate
