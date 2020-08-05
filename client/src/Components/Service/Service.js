//import used technologies
import React from "react";
import axios from "axios";

//import CSS
import "./Service.css";

//import used files
import CheckBox from "./CheckBox.js";
import Facility from "../Facility/Facility";

//create Service Compo
class Service extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }

  handleCheckChieldElement = (event) => {
    let services = this.state.services;
    services.forEach((service) => {
      if (service.value === event.target.value)
        service.isChecked = event.target.checked;
    });
    this.setState({ services: services });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    let checkArray = [];
    const services = this.state.services;
    for (var i = 0; i < services.length; i++) {
      if (services[i].isChecked === true) {
        checkArray.push(services[i].value);
      }
    }
    let CheckedServices = checkArray;

    axios
      .post("http://localhost:4000/FixMe", {
        services: CheckedServices,
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
              value={this.state.message}
              onChange={this.handleChange}
              name="message"
              id="exampleTextarea"
              rows="2"
              placeholder="Write message"
            ></textarea>
            <button
              type="submit"
              className="btn btn-lg font-weight-bold btn-secondary btn-block"
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
