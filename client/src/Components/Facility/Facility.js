//import used technologies
import React from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Map from "../../apiMapGoogle/Map";
import { Form, Button } from "react-bootstrap";
import { Input } from "reactstrap";
import { Col } from "react-bootstrap";
import ContolPanel from "../ControlPanel/ControlPanel";
import { toast } from "react-toastify";
//import CSS
import "./Facility.css";
//import used files
import PhotoUpload from "../PhotoUpload/PhotoUpload";
import { decode } from "punycode";

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
      err: "",
      placeName: "",
    };
  }
  // Take the id from token
  componentDidMount() {
    const token = localStorage.ownertoken;
    const decoded = jwt_decode(token);
    this.setState({ ownerId: decoded.id, placeName: decoded.placeName });
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
      .put(`http://localhost:5000/UpdatePosition`, {
        ownerId: this.state.ownerId,
        Position: this.state.Position,
      })
      .then((result) => {
        this.setState({ err: "" });
      })
      .catch((err) => {
        this.setState({ err: "err" });
      });
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
        if (response.data === "You already have Facilities") {
          toast("You already have Facilities ❤", {
            type: "error",
          });
        } else {
          toast("Your Facilities Added Successfully ❤", {
            type: "success",
          });
          window.location.href = "/ownerProfile";
        }
      })
      .catch(function (error) {
        console.log(error);
        console.error(error);
      });
  };
  //render Facility Compo
  render() {
    return (
      <div>
        <div className="FacilityStore">
          <ContolPanel />
        </div>
        <div style={{ marginLeft: "22%", marginTop: "-125%" }}>
          <Form className="form">
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label className="Label">Tabels</Form.Label>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label className="Label">Price</Form.Label>
                <Input
                  type="number"
                  name="tablePrice"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="Label">Quantity</Form.Label>
                <Input
                  type="number"
                  name="tableQuant"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="Label">Image Tabels</Form.Label>
                <PhotoUpload handler={this.getTableUrl} />
              </Form.Group>
            </Form.Row>

            {/* ///////////////////// */}
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label className="Label">Small Tents </Form.Label>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label className="Label">Quantity:</Form.Label>
                <Input
                  type="number"
                  name="SmallTentQuant"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="Label">Price:</Form.Label>
                <Input
                  type="number"
                  name="SmallTentPrice"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="Label">Image Small Tents</Form.Label>
                <PhotoUpload handler={this.getSmallTentUrl} />
              </Form.Group>
            </Form.Row>
            {/* ///////////////////// */}
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label className="Label"> Large Tents </Form.Label>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label className="Label">Quantity:</Form.Label>
                <Input
                  type="number"
                  name="LargeTentQuant"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="Label">Price:</Form.Label>
                <Input
                  type="number"
                  name="LargeTentPrice"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="Label">Image Large Tents</Form.Label>
                <PhotoUpload handler={this.getLargeTentUrl} />{" "}
              </Form.Group>
            </Form.Row>
            <div className="MapLabel">
              <Form.Label>Put Your Location On Map</Form.Label>
            </div>
            <div className="mapIn">
              <Map />
            </div>
            <div className="text-danger">{this.state.err}</div>
            <button
              type="submit"
              style={{ maxWidth: "50%" }}
              class="btn btn-lg font-weight-bold btn-primary btn-block"
              onClick={this.handleSubmit}
              style={{ width: "250px" }}
              s
            >
              Send Your Request
            </button>
            <br />
          </Form>
        </div>
      </div>
    );
  }
}
//export compo
export default Facility;
//Check and vaildates
