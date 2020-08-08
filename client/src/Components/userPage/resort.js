//import used technologies
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//import CSS

//import used files

//create Facility Compo
class Facility extends React.Component {
  constructor(props) {
    super(props);
  }

  //render Facility Compo
  render() {
    console.log(Object.keys(this.props.faclitics));
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
      owner: [],
      isFull: false,
    };
  }

  //componentDidMount Function
  componentDidMount() {
    axios
      .get(`http://localhost:5000/services/${this.props.match.params.id}`)
      .then((res) => {
        const ser = res.data[0].servicesAvailable;
        const reight = [];
        for (var key in ser) {
          if (ser[key] === true) {
            reight.push(key);
          }
        }
        this.setState({ service: reight });
      })
      .catch((err) => {
        console.log("ERROR from AXIOS =>", err);
      });
    axios
      .get(`http://localhost:5000/Facilites/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({ faclitics: res.data[0].facilities });
      })
      .catch((err) => {
        console.log("ERROR from AXIOS =>", err);
      });
    // axios
    //   .get(`http://localhost:5000/Owner/${this.props.match.params.id}`)
    //   .then((res) => {
    //     // console.log(res.data[0], "ffffssssf");
    //     this.setState({ owner: res.data[0].facilities });
    //   })
    //   .catch((err) => {
    //     console.log("ERROR from AXIOS =>", err);
    //   });
  }
  //render Resort Compo
  render() {
    // const { id } = this.props.match.params.id;
    const { service } = this.state;

    return (
      <div>
        <div class="media" style={{ margin: "100px" }}>
          <img class="mr-3" src="..." alt="Generic placeholder image"></img>
          <div class="media-body">
            <h5 class="mt-0">ssss</h5>
          </div>
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
        <Facility faclitics={this.state.faclitics} />
      </div>
    );
  }
}

//render Filtter Compo
export default Resort;

//Check and vaildate
