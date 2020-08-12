///import used technologies
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
      searchValues: [],
      selectedSearchVal: "",
      selectedVal: "",
      placeName: [],
      area: [
        "Gaza",
        "North Gaza",
        "Middle Area",
        "Khan Younis",
        "Rafah",
        "Another place",
      ],
      ratingAvg: [1, 2, 3, 4, 5],
      error: "",
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/AllOwner")
      .then((res) => {
        var placeNames = [];
        res.data.forEach((element) => {
          placeNames.push(element.placeName);
        });
        this.setState({ AllOwners: res.data, placeName: placeNames });
      })
      .catch((err) => {
        console.log("ERROR from AXIOS =>", err);
      });
  }
  //handle function
  handle = (e) => {
    this.setState({
      selectedVal: e.target.value,
      searchValues: this.state[e.target.value],
      selectedSearchVal: "",
    });
  };
  //handleSelect function
  handleSelect = (e) => {
    this.setState({ selectedSearchVal: e.target.value });
    // console.log(
    //   `111111111${this.state.selectedVal}/22222222222222${this.state.selectedSearchVal}`
    // );
    axios
      .get(
        `http://localhost:5000/filterOwner/${this.state.selectedVal}/${e.target.value}`
      )
      .then((res) => {
        // if (typeof res.data === "object") {
        //   this.setState({ AllOwners: res.data });
        // }
        this.setState({ error: res.data.message, AllOwners: res.data.result });
      })
      .catch((err) => {
        console.log("ERROR from AXIOS =>", err);
      });
  };
  //render Filtter Compo
  render() {
    console.log(this.state.AllOwners);
    const { AllOwners } = this.state;
    return (
      <div>
        <div
          className="dropdown"
          style={{
            width: "1214px",
            height: "70px",
            backgroundColor: "#DFE5E3",
            border: "3px",
            borderRadius: "10px",
          }}
        >
          <span style={{ margin: "15px" }}>Search by</span>
          <select
            id="SelectOptions"
            className="mdb-select md-form"
            searchable="Search here.."
            value={this.state.selectedVal}
            onChange={this.handle}
          >
            <option value="">Choose Your Place</option>
            <option value="placeName">Names</option>
            <option value="ratingAvg">rating</option>
            <option value="area">Location</option>
          </select>
          <select
            id="SelectOptions"
            className="mdb-select md-form"
            searchable="Search here.."
            value={this.state.selectedSearchVal}
            onChange={this.handleSelect}
          >
            <option value="">Choose Your Place</option>
            {this.state.searchValues.map((element, index) => (
              <option value={element}> {element} </option>
            ))}
          </select>
        </div>

        <div>
          <p className="text-danger">{this.state.error}</p>
          {this.state.AllOwners.map((dataIN, key) => (
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
