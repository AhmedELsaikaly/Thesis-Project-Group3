import React from "react";
import { Link } from "react-router-dom";
import one from "./../landPage/one.jpg";
import two from "./../landPage/two.jpg";
import three from "./../landPage/three.jpg";
// import "./style.css";
const names = ["rani", "sma"];
class Filtter extends React.Component {
  constructor() {
    super();
    this.state = {
      selectVal: "",
      selectSecVal: "",
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

      filtter: [
        names,
        [1, 2, 3, 4, 5],
        ["Rafah", "Khan", "Middle ", "Gaza", "Another place"],
      ],
      second: [],
    };
  }
  //   componentDidMount() {
  //     // setTimeout(this.sta, 1000)
  //     onChange :this.handle
  //   }
  handle = (e) => {
    console.log(e.target.id, "dddd");
    this.setState({ selectVal: e.target.name });
    this.setState({ second: this.state.filtter[e.target.id] }, () => {});
  };
  handleSelect = (e) => {
    this.setState({ selectSecVal: e.target.name });
  };
  //   handleSelecte = (e) => {
  //     this.setState({ selectVal: e.target.value });
  //   };

  render() {
    const { data } = this.state;
    const { second } = this.state;
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
export { Filtter };
