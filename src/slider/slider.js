//import used technologies
import React from "react";
import { Link } from "react-router-dom";
import Slider from "@farbenmeer/react-spring-slider";

//import CSS
import "./slider.css";

//import used files
// import one from './../landPage/one.jpg'

//create SliderCom Compo
class SliderCom extends React.Component {
  constructor() {
    super();
    this.state = {
      imgUrl: [],
    };
  }
  //onSlideChange function
  onSlideChange = (index) => console.log(`changed to slide ${index}`);

  //BulletComponent function
  BulletComponent = ({ onClick, isActive }) => (
    <li
      style={{
        width: "10px",
        height: "10px",
        backgroundColor: "rgb(105 99 105 / 89%)",
        margin: "0 2px",
        opacity: isActive && "0.5",
        borderRadius: "5px",
      }}
      onClick={onClick}
    />
  );

  //ArrowComponent function
  ArrowComponent = ({ onClick, direction }) => {
    return (
      <div
        style={{
          border: "1px solid black",
          padding: "1em",
          backgroundColor: "white",
        }}
        onClick={onClick}
      >
        {direction}
      </div>
    );
  };

  //render SliderCom Compo
  render() {
    const { url } = this.props;
    return (
      <div className="card">
        <div
          style={{
            width: "100%",
            height: "450px",
            marginLeft: "-250px",
            marginTop: "100px",
          }}
        >
          <Slider
            activeIndex={0}
            auto={3000}
            hasBullets
            BulletComponent={this.BulletComponent}
            ArrowComponent={this.ArrowComponent}
            onSlideChange={this.onSlideChange}
          >
            {url.map((dataIN, key) => {
              return (
                <div style={{ width: "100%", height: "450px" }}>
                  <div
                    className="card-body"
                    style={{
                      backgroundImage: `url(${dataIN})`,
                      height: "450px",
                      width: "55%",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      marginLeft: "250px",
                      padding: "100px",
                    }}
                  >
                    <br></br>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
//export compo
export { SliderCom };

//Check and vaildate
