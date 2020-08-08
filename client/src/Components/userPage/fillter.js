//import used technologies
import React from "react";
import { Link } from "react-router-dom";
//import CSS
import "./fillter.css";
import Resort from "./resort";
import axios from "axios";
//import used files

//fake names for testing
const names = ["rani", "sma"];

//create Filtter Compo
class Filtter extends React.Component {
  constructor() {
    super();
    this.state = {
      AllOwners: [],
      selectVal: "",
      selectSecVal: "",

      filtter: [
        names,
        [1, 2, 3, 4, 5],
        ["Rafah", "Khan", "Middle ", "Gaza", "Another place"],
      ],
      second: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/AllOwner")
      .then((res) => {
        this.setState({ AllOwners: res.data });
        // setTimeout(function () {
        //   console.log(this.state.AllOwners, "ddd");
        // }, 3000);
      })
      .catch((err) => {
        console.log("ERROR from AXIOS =>", err);
      });
  }

  //handle function
  handle = (e) => {
    console.log(e.target.id, "dddd");
    this.setState({ selectVal: e.target.name });
    this.setState({ second: this.state.filtter[e.target.id] }, () => {});
  };

  //handleSelect function
  handleSelect = (e) => {
    this.setState({ selectSecVal: e.target.name });
  };
  //   handleSelecte = (e) => {
  //     this.setState({ selectVal: e.target.value });
  //   };

  //render Filtter Compo
  render() {
    const { data } = this.state;
    const { second } = this.state;
    const { AllOwners } = this.state;
    return (
      <div>
        <div
          className="dropdown"
          style={{
            width: "1214px",
            height: "70px",
            backgroundColor: "#dfe5e3",
            border: "3px",
            borderRadius: "10px",
          }}
        >
          <span style={{ margin: "15px" }}>Search by</span>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{ margin: "15px", width: "200px" }}
          >
            {this.state.selectVal}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a
              className="dropdown-item"
              id="0"
              name="Name"
              onClick={this.handle}
            >
              Name
            </a>

            <a
              className="dropdown-item"
              id="1"
              name="Rating"
              onClick={this.handle}
            >
              Rating
            </a>
            <a
              className="dropdown-item"
              id="2"
              name="Location"
              onClick={this.handle}
            >
              Location
            </a>
          </div>
        </div>
        <div>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{ margin: "15px", width: "200px" }}
          >
            {this.state.selectSecVal}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {second.map((index, key) => (
              <a
                name={index}
                className="dropdown-item"
                onClick={this.handleSelect}
              >
                {index}
              </a>
            ))}
          </div>
        </div>
        <div>
          {AllOwners.map((dataIN, key) => (
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
                src={dataIN.licensePhoto}
                alt="Card image cap"
              ></img>
              <div class="card-body">
                <h5 class="card-title">Place: {dataIN.placeName}</h5>
                <h5 class="card-title">{dataIN.name}</h5>
                <h5 class="card-title">Mobile: {dataIN.mobileNumber}</h5>

                <Link to={`resort/${dataIN._id}`} className="button is-warning">
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
//render Filtter Compo
export { Filtter };

//Check and vaildate
