//import used technologies
import React from "react";
// import {
//   Card,
//   CardImg,
//   CardText,
//   CardBody,
//   CardTitle,
//   CardSubtitle,
//   Button,
//   CardLink,
// } from "reactstrap";
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";

//import CSS
import "./userPage.css";

//import used files
import one from "./../landPage/one.jpg";
import two from "./../landPage/two.jpg";
import three from "./../landPage/three.jpg";
// import { url } from "inspector";

// declare axios for routing
var axios = require("axios");

//create UserPage Compo
class UserPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          imgurl: one,
          name: "Ra7aa 1",
          Rating: "5",
        },
        {
          imgurl: two,
          name: "Ra7aa 2",
          Rating: "5",
        },
        {
          imgurl: three,
          name: "Ra7aa 3",
          Rating: "5",
        },
        {
          imgurl: three,
          name: "Ra7aa 3",
          Rating: "5",
        },
      ],
    };
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
    const { data } = this.state;
    return (
      <div className="NavBar__div">
        <nav className="nav">
          <div className="container">
            <div className="logo">
              <span>Ra7a</span>
            </div>
            <div className="main_list" id="mainListDiv">
              <ul>
                <Link to="/reservation">
                  <li>Reservation</li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          {data.map((dataIN, key) => (
            <div
              class="card"
              style={{
                width: "25%",
                marginLeft: "90px",
                marginTop: "90px",
                float: "left",
                padding: "10px",
              }}
            >
              <img
                class="card-img-top"
                style={{ height: "200px" }}
                src={dataIN.imgurl}
                alt="Card image cap"
              ></img>
              <div class="card-body">
                <h5 class="card-title">{dataIN.name}</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

//render UserPage Compo
export { UserPage };

//Check and vaildate
