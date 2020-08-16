//import used technologies
import React from "react";
import "./SliderForPages.css";
import SlideOne from "./oceanView2.jpg";
import SlideTwo from "./oceanView1.jpg";
import SlideThree from "./oceanView3.jpg";
class SliderForPages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //render UserReservation Compo
  render() {
    return (
      <div id="slider" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={SlideOne} class="d-block w-100" alt="slide1" />
            <div id="caption">
              <h1>{this.props.head}</h1>
              <div class="blured"></div>
            </div>
          </div>
          <div class="carousel-item">
            <img src={SlideTwo} class="d-block w-100" alt="slide2" />
            <div id="caption">
              <h1>{this.props.head}</h1>
              <div class="blured"></div>
            </div>
          </div>
          <div class="carousel-item">
            <img src={SlideThree} class="d-block w-100" alt="slide3" />
            <div id="caption">
              <h1>{this.props.head}</h1>
              <div class="blured"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SliderForPages;
