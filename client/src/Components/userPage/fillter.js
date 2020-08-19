///import used technologies
import React from "react";
import { NotEditStar } from "../Rating&Feedback/Rating";
import Footer from "../SubPages/Footer/Footer";
import InternalNav from "../InternalNav/InternalNav";
import Navbar from "./../Navbar/Navbar";
import axios from "axios";
import "./fillter.css";

//import used files

//create Fillter Compo
class Fillter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AllOwners: [],
      searchValues: [],
      ReturnAll: [],
      All: [],
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
        this.setState({
          AllOwners: res.data,
          placeName: placeNames,
          ReturnAll: res.data,
        });
      })
      .catch((err) => {
        console.log("ERROR from AXIOS =>", err);
      });
  }
  //handle function
  handle = (e) => {
    this.setState({
      error: "",
      selectedVal: e.target.value,
      searchValues: this.state[e.target.value],
      selectedSearchVal: "",
      AllOwners: this.state.ReturnAll,
    });
  };
  // componentDidMount(){
  // if(localStorage.usertoken!==""){
  //  InternalNav
  // }else {
  //   return Navbar
  // }
  // }
  //handleSelect function
  handleSelect = (e) => {
    this.setState({ selectedSearchVal: e.target.value });

    axios
      .get(
        `http://localhost:5000/filterOwner/${this.state.selectedVal}/${e.target.value}`
      )
      .then((res) => {
        this.setState({ error: res.data.message, AllOwners: res.data.result });
      })
      .catch((err) => {
        console.log("ERROR from AXIOS =>", err);
      });
  };
  //render Fillter Compo
  render() {
    const { AllOwners } = this.state;
    return (
      <div>
        {localStorage.usertoken !== undefined ? <InternalNav /> : <Navbar />}
        {/*  */}
        <hr></hr>
        <div>
          <div className="dropdown">
            <h2 style={{ marginLeft: "42%" }}>Welcome to Resorts</h2>
            <h2 style={{ marginLeft: "28%" }}>
              Here you can filter the resorts in the way you wants
            </h2>
            <span className="spanSearch">Filter By :</span>
            <select
              id="SelectOptions"
              className="selectOption"
              searchable="Search here.."
              value={this.state.selectedVal}
              onChange={this.handle}
            >
              <option value="All">All Resorts</option>
              <option value="placeName">Names</option>
              <option value="ratingAvg">Rating</option>
              <option value="area">Location</option>
            </select>
            <select
              id="SelectOptions"
              className="selectOption"
              searchable="Search here.."
              value={this.state.selectedSearchVal}
              onChange={this.handleSelect}
            >
              <option value="">Choose Your filter</option>
              {this.state.searchValues.map((element, index) => (
                <option key={index} value={element}>
                  {" "}
                  {element}{" "}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p className="text-danger">{this.state.error}</p>
            <section id="packages">
              {this.state.AllOwners.map((element, index) => (
                <div className="box" key={index}>
                  <div className="content">
                    <div className="featuredElement">
                      <h2>{element.placeName}</h2>
                      <p>{element.area}</p>
                      <a href={`resort/${element._id}`}>Read More</a>
                      <NotEditStar rate={element.ratingAvg} />
                    </div>
                  </div>
                  <img src={element.licensePhoto} />
                </div>
              ))}
            </section>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
export { Fillter };
