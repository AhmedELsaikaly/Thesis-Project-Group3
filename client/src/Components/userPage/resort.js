//import used technologies
import React from "react";
import { Link } from "react-router-dom";
import "./Resort.css";
import axios from "axios";
import Comment from "../Rating&Feedback/Comments";
import Reservation from "./reservation";
import Pay from "./pay";
//import CSS

//import used files

//create Facility Compo
class Facility extends React.Component {
  constructor(props) {
    super(props);
  }

  //render Facility Compo
  render() {
    return (
      <div>
        {Object.keys(this.props.faclitics).length !== 0 ? (
          <div>
            {Object.keys(this.props.faclitics).map((element, index) => (
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
                  src={this.props.faclitics[element].img}
                  alt="Card image cap"
                ></img>
                <div class="card-body">
                  <h5 class="card-title">{element}</h5>
                  <p class="card-text">
                    Price {this.props.faclitics[element].price}
                  </p>
                  <p class="card-text">
                    {" "}
                    Quantity {this.props.faclitics[element].quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

//create Resort Compo
class Resort extends React.Component {
  constructor() {
    super();
    this.state = {
      service: [],
      faclitics: {},
      ownerId: "",
      isFull: false,
      owner: "",
    };
  }
  componentDidMount() {
    this.setState({ ownerId: this.props.match.params.id });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.ownerId !== this.state.ownerId) {
      axios
        .get(`http://localhost:5000/services/${this.state.ownerId}`)
        .then((res) => {
          const ser = res.data[0].servicesAvailable;
          const reight = [];
          for (var key in ser) {
            if (ser[key] === true) {
              reight.push(key);
            }
          }
          this.setState({
            service: reight,
          });
        })
        .catch((err) => {
          console.log("ERROR from AXIOS =>", err);
        });
      axios
        .get(`http://localhost:5000/Facilites/${this.state.ownerId}`)
        .then((res) => {
          this.setState({ faclitics: res.data[0].facilities });
        })
        .catch((err) => {
          console.log("ERROR from AXIOS =>", err);
        });
      axios
        .get(`http://localhost:5000/Owner/${this.state.ownerId}`)
        .then((res) => {
          console.log(res);
          this.setState({ owner: res.data[0] });
        })
        .catch((err) => {
          console.log("ERROR from AXIOS =>", err);
        });
    }
  }

  //componentDidMount Function

  //render Resort Compo
  render() {
    // const { id } = this.props.match.params.id;
    const { service } = this.state;

    return (
      <div>
        <div class="media" style={{ margin: "100px" }}>
          <img
            class="mr-3"
            src={this.state.owner.licensePhoto}
            alt="Generic placeholder image"
          ></img>
          <div class="media-body">
            <h5 class="mt-0">{this.state.owner.fullName}</h5>
          </div>

          <div style={{ margin: "100px" }}>
            <ul class="list-group">
              <li
                style={{ width: "400px", height: "50px" }}
                class="list-group-item active"
              >
                Services
              </li>
              {service.map((dataIN, key) => (
                <li
                  style={{ width: "400px", height: "50px" }}
                  class="list-group-item"
                >
                  {dataIN}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="facility">
          <Facility faclitics={this.state.faclitics} />
        </div>
        <Reservation ownerId={this.state.ownerId}  />
        <div className="rating">
          <Comment OwnerId={this.state.ownerId} />
        </div>
        <Pay />
      </div>
    );
  }
}

//render Filtter Compo
export default Resort;

//Check and vaildate
