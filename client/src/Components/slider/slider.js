//import used technologies
import React from "react";
import { Link } from "react-router-dom";
import one from "./one.jpg";
import two from "./two.jpg";
import three from "./three.jpg";
import four from "./four.jpg";
import five from "./five.jpg";
//import CSS
import "./slider.css";

//create Slider Compo
class Slider extends React.Component {
  //render NavBar Compo
  render() {
    return (
      <div>
        <div id="slider">
          <div
            id="headerSlider"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#headerSlider"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#headerSlider" data-slide-to="1"></li>
              <li data-target="#headerSlider" data-slide-to="3"></li>
              <li data-target="#headerSlider" data-slide-to="4"></li>
              <li data-target="#headerSlider" data-slide-to="5"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={one} className="d-block w-100" alt="first slide" />
              </div>
              <div className="carousel-item">
                <img src={two} className="d-block w-100" alt="second slide" />
              </div>
              <div className="carousel-item">
                <img src={three} className="d-block w-100" alt="third slide" />
              </div>
              <div className="carousel-item">
                <img src={four} className="d-block w-100" alt="fourth slide" />
              </div>
              <div className="carousel-item">
                <img src={five} className="d-block w-100" alt="fifth slide" />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#headerSlider"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#headerSlider"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Slider;
