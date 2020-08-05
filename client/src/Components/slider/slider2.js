//import used technologies
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "@farbenmeer/react-spring-slider";
import one from "./../landPage/one.jpg";
import two from "./../landPage/two.jpg";
import three from "./../landPage/three.jpg";
import four from "./../landPage/four.jpg";
import five from "./../landPage/five.jpg";
//import CSS
import "./slider.css";

//import used files
// import one from './../landPage/one.jpg'

//create SliderCom Compo

const SliderCom1 = () => {
  const [imgUrl, setImgUrl] = useState([one, two, three, four, five]);

  //onSlideChange function
  const onSlideChange = (index) => console.log(`changed to slide ${index}`);

  //BulletComponent function
  const BulletComponent = ({ onClick, isActive }) => (
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
  const ArrowComponent = ({ onClick, direction }) => {
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

  //render SliderCom1 Compo
  // render() {
  // const { imgUrl } = this.state;

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
          BulletComponent={BulletComponent}
          ArrowComponent={ArrowComponent}
          onSlideChange={onSlideChange}
        >
          {imgUrl.map((dataIN, key) => {
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
};

//export compo
export default SliderCom1;

//Check and vaildate
