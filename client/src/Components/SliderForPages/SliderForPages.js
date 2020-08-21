//import used technologies
import React from "react";
import "./SliderForPages.css";
// import SlideOne from "https://res.cloudinary.com/dtm3d0erl/image/upload/v1598029757/viwy7lq4hrl3yvue9qyh.jpg";
// import SlideTwo from "https://res.cloudinary.com/dtm3d0erl/image/upload/v1598029744/ckl5xn0jbzxiieqoq1mj.jpg";
// import SlideThree from "https://res.cloudinary.com/dtm3d0erl/image/upload/v1598029765/wuscqnmrhviqspbjjg3k.jpg";
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
            <img src="https://res.cloudinary.com/dtm3d0erl/image/upload/v1598029757/viwy7lq4hrl3yvue9qyh.jpg" class="d-block w-100" alt="slide1" />
            <div id="caption">
              <h1>{this.props.head}</h1>
              <div class="blured"></div>
            </div>
          </div>
          <div class="carousel-item">
            <img src= "https://res.cloudinary.com/dtm3d0erl/image/upload/v1598029744/ckl5xn0jbzxiieqoq1mj.jpg" class="d-block w-100" alt="slide2" />
            <div id="caption">
              <h1>{this.props.head}</h1>
              <div class="blured"></div>
            </div>
          </div>
          <div class="carousel-item">
            <img src= "https://res.cloudinary.com/dtm3d0erl/image/upload/v1598029765/wuscqnmrhviqspbjjg3k.jpg" class="d-block w-100" alt="slide3" />
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
