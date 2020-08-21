//import used technologies
import React from "react";
import { Link } from "react-router-dom";
// import one from "https://res.cloudinary.com/dtm3d0erl/image/upload/v1598029407/uofy1uqz5uokzq4vtpc5.jpg";
// import two from "https://res.cloudinary.com/dtm3d0erl/image/upload/v1598029555/bjw0tllkvz9s9d3tmy3i.jpg";
// import three from "https://res.cloudinary.com/dtm3d0erl/image/upload/v1598029434/nvwl69sv662ucwzwi01n.jpg	";
// import four from "https://res.cloudinary.com/dtm3d0erl/image/upload/v1598029400/ldcevlcptqjgwoccicjx.jpg";
// import five from "https://res.cloudinary.com/dtm3d0erl/image/upload/v1598029409/b33qzo1d9trerwu2g5m9.jpg";
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
                <img
                  src="https://res.cloudinary.com/dtm3d0erl/image/upload/v1598029407/uofy1uqz5uokzq4vtpc5.jpg"
                  className="d-block w-100"
                  alt="first slide"
                />
              </div>
              <div className="carousel-item">
                <img src="https://res.cloudinary.com/dtm3d0erl/image/upload/v1598029555/bjw0tllkvz9s9d3tmy3i.jpg" className="d-block w-100" alt="second slide" />
              </div>
              <div className="carousel-item">
                <img src="https://res.cloudinary.com/dtm3d0erl/image/upload/v1598029434/nvwl69sv662ucwzwi01n.jpg" className="d-block w-100" alt="third slide" />
              </div>
              <div className="carousel-item">
                <img src="https://res.cloudinary.com/dtm3d0erl/image/upload/v1598029400/ldcevlcptqjgwoccicjx.jpg" className="d-block w-100" alt="fourth slide" />
              </div>
              <div className="carousel-item">
                <img src="https://res.cloudinary.com/dtm3d0erl/image/upload/v1598029409/b33qzo1d9trerwu2g5m9.jpg" className="d-block w-100" alt="fifth slide" />
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
