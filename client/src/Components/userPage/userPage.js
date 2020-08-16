//import used technologies
import React from "react";
import { Fillter } from "./fillter";
import { Link } from "react-router-dom";

//import CSS
import "./userPage.css";

//import used files
// import one from "./../landPage/one.jpg";
// import two from "./../landPage/two.jpg";
// import three from "./../landPage/three.jpg";
// import { url } from "inspector";

// declare axios for routing
var axios = require("axios");

//create UserPage Compo
class UserPage extends React.Component {
  constructor() {
    super();
    // this.handleSubmet = this.handleSubmet.bind(this);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount function
  componentDidMount() {
    this.handleSubmit();
  }
  // handleSubmit function
  handleSubmit = () => {
    axios
      .get("/")
      .then(function (response) {
        // this.setState({ data: response.data });
        // handle success
        // console.log(response);
      })
      .catch(function (error) {
        // handle error
        // console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  //render UserPage Compo
  render() {
    return (
      <div>
        <Fillter />
      </div>
    );
  }
}

//render UserPage Compo
export { UserPage };

//Check and vaildate
