//import used technologies
import React from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

//import CSS
import "./Facility.css";

//import used files
import PhotoUpload from "../PhotoUpload/PhotoUpload";
import jessica from "./1.png";

//create Facility Compo
class Facility extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ownerId: "",
      TableUrl: { url: null, isUploaded: false },
      SmallTentUrl: { url: null, isUploaded: false },
      LargeTentUrl: { url: null, isUploaded: false },
      tableQuant: "",
      tablePrice: "",
      LargeTentQuant: "",
      LargeTentPrice: "",
      SmallTentQuant: "",
      SmallTentPrice: "",
    };
  }
  // Take the id from token
  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    // console.log(decoded.id);
    this.setState({ ownerId: decoded.id });
  }
  //handleChange function
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //getTableUrl function
  getTableUrl = (url) => {
    this.setState((prevState) => {
      let TableUrl = Object.assign({}, prevState.TableUrl);
      TableUrl.url = url;
      TableUrl.isUploaded = true;
      return { TableUrl };
    });
  };
  //getSmallTentUrl function
  getSmallTentUrl = (url) => {
    this.setState((prevState) => {
      let SmallTentUrl = Object.assign({}, prevState.SmallTentUrl);
      SmallTentUrl.url = url;
      SmallTentUrl.isUploaded = true;
      return { SmallTentUrl };
    });
  };
  //getLargeTentUrl function
  getLargeTentUrl = (url) => {
    this.setState((prevState) => {
      this.setState((prevState) => {
        let LargeTentUrl = Object.assign({}, prevState.LargeTentUrl);
        LargeTentUrl.url = url;
        LargeTentUrl.isUploaded = true;
        return { LargeTentUrl };
      });
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/Facilites", {
        facilities: {
          table: {
            img: this.state.TableUrl.url,
            price: this.state.tablePrice,
            quantity: this.state.tableQuant,
          },
          SmallTents: {
            img: this.state.SmallTentUrl.url,
            price: this.state.SmallTentPrice,
            quantity: this.state.SmallTentQuant,
          },
          LargeTents: {
            img: this.state.LargeTentUrl.url,
            price: this.state.LargeTentPrice,
            quantity: this.state.LargeTentQuant,
          },
        },
        ownerId: this.state.ownerId,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  //render Facility Compo
  render() {
    return (
      <div className="Facility">
        <form>
          <h1> Tables</h1>
          <div class="form-group">
            <label for="inputsm">Quantity:</label>
            <input
              style={{ width: "300px" }}
              class="form-control input-sm"
              id="inputsm"
              type="number"
              name="tableQuant"
              onChange={this.handleChange}
            />
            <div class="form-group">
              <label for="inputsm">Price:</label>
              <input
                style={{ width: "300px" }}
                type="number"
                class="form-control inputsm"
                id="inputsm"
                name="tablePrice"
                onChange={this.handleChange}
              />
            </div>
            <PhotoUpload handler={this.getTableUrl} />
          </div>
          <h1> Large Tents </h1>
          <div class="form-group">
            <label for="inputsm">Quantity:</label>
            <input
              style={{ width: "300px" }}
              class="form-control input-sm"
              id="inputsm"
              type="number"
              name="LargeTentQuant"
              onChange={this.handleChange}
            />
          </div>
          <div class="form-group">
            <label for="inputsm">Price:</label>
            <input
              style={{ width: "300px" }}
              type="number"
              class="form-control inputsm"
              id="inputsm"
              name="LargeTentPrice"
              onChange={this.handleChange}
            />
          </div>
          <PhotoUpload handler={this.getSmallTentUrl} />
          <h1> small Tents </h1>
          <div class="form-group">
            <label for="inputsm">Quantity:</label>
            <input
              style={{ width: "300px" }}
              class="form-control input-sm"
              id="inputsm"
              type="number"
              name="SmallTentQuant"
              onChange={this.handleChange}
            />
          </div>
          <div class="form-group">
            <label for="inputsm">Price:</label>
            <input
              style={{ width: "300px" }}
              type="number"
              class="form-control inputsm"
              id="inputsm"
              name="SmallTentPrice"
              onChange={this.handleChange}
            />
          </div>
          <PhotoUpload handler={this.getLargeTentUrl} />
          <button
            type="submit"
            className="btn btn-lg font-weight-bold btn-secondary btn-block"
            onClick={this.handleSubmit}
          >
            {" "}
            Send Your Request{" "}
          </button>
        </form>
      </div>
    );
  }
}
//export compo
export default Facility;
//Check and vaildates
