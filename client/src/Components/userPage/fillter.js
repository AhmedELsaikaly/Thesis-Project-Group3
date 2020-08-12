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
      index: 0,
      selectVal: "",
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
    this.setState({ selectVal: e.target.value });
    // this.setState({ index: e.target });
    // this.setState({ second: this.state.filtter[e.target.name] });
  };

  //handleSelect function
  handleSelect = (e) => {
    this.setState({ selectSecVal: e.target.name });
  };

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
          <select
            id="SelectOptions"
            className="mdb-select md-form"
            searchable="Search here.."
            value={this.state.selectVal}
            name={this.state.index}
            onChange={this.handle}
          >
            <option value="">Choose Your Place</option>
            <option value="name" name="0">
              Names
            </option>
            <option value="rating" name="1">
              Rating
            </option>
            <option value="location" name="2">
              Location
            </option>
          </select>
          <select
            id="SelectOptions"
            className="mdb-select md-form"
            searchable="Search here.."
            value={this.state.selectVal}
            name={this.state.index}
            onChange={this.handleSelect}
          >
            <option value="">Choose Your Place</option>
            {second.map((index, key) => (
              <option value={index} name>
                {" "}
                {index}{" "}
              </option>
            ))}
          </select>
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
