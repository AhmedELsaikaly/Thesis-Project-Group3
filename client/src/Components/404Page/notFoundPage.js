import React from "react";
import "./notFound.css";
import notFoundPhotov from "./404.svg";
class NotFound extends React.Component {
  render() {
    return (
      <div class="notFound">
        <img class="ops" src={notFoundPhotov} />
        <br />
        <h3>
          Sorry page NotFound <br /> Welcome to Raha App
        </h3>
        <br />
        <a class="buton" href="/">
          Back to Home
        </a>
      </div>
    );
  }
}
export default NotFound;
