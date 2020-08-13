//import used technologies
import React from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

//import CSS
import "./Service.css";

//import used files
import CheckBox from "./CheckBox.js";

//create Service Compo
class Service extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ownerId: "",
      services: [
        { id: 1, value: "PlayGround", isChecked: false },
        { id: 2, value: "SwimmingPool", isChecked: false },
        { id: 3, value: "FoodOffer", isChecked: false },
        { id: 4, value: "SoftDrinks", isChecked: false },
        { id: 5, value: "TV", isChecked: false },
        { id: 6, value: "GrillArea", isChecked: false },
        { id: 7, value: "Shesha", isChecked: false },
        { id: 8, value: "GreenArea", isChecked: false },
        { id: 9, value: "KidsArea", isChecked: false },
      ],
      otherService: "",
    };
  }
  //componentDidMount function
  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    // console.log(decoded.id);
    this.setState({ ownerId: decoded.id });
  }

  //handleChange function
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  //handleCheckChieldElement function
  handleCheckChieldElement = (event) => {
    let services = this.state.services;
    services.forEach((service) => {
      if (service.value === event.target.value)
        service.isChecked = event.target.checked;
    });
    this.setState({ services: services });
  };

  //handleSubmit function
  handleSubmit = (e) => {
    e.preventDefault();
    let checkArray = {};
    const services = this.state.services;
    for (var i = 0; i < services.length; i++) {
      checkArray[services[i].value] = services[i].isChecked;
    }
    let CheckedServices = checkArray;
    axios
      .post("http://localhost:5000/services", {
        servicesAvailable: CheckedServices,
        ownerId: this.state.ownerId,
        otherService: this.state.otherService,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  //render Service Compo
  render() {
    return (
      <div className="content">
        <p>
          <span>Hi {/* you need to put the owner name*/} Saeed</span>
          <span>AL Husam Resort</span>
        </p>
        <fieldset className="form-group">
          <label htmlFor="service">
            <span>Which services that You have in your Resort?</span>
          </label>
          <div id="serviceElement" className="form-group ">
            {this.state.services.map((service) => {
              return (
                <CheckBox
                  {...service}
                  handleCheckChieldElement={this.handleCheckChieldElement}
                />
              );
            })}
          </div>
          <div className="form-group">
            <label htmlFor="note">
              <span>Other Services</span>
            </label>
            <textarea
              className="form-control"
              onChange={this.handleChange}
              value={this.state.otherService}
              name="otherService"
              id="exampleTextarea"
              rows="2"
              placeholder="Write message"
            ></textarea>
            <button
              type="submit"
              className="btn btn-lg font-weight-bold btn-secondary btn-block"
              onClick={this.handleSubmit}
            >
              Send Your Request
            </button>
          </div>
        </fieldset>
      </div>
    );
  }
}
//export compo
export default Service;

//Check and vaildate
