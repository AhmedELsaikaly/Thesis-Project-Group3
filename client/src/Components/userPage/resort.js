//import used technologies
import React from "react";
import "./Resort.css";
import "./styles.css";
import "./facility.css";
import axios from "axios";
import Reservation from "./reservation";
import Pay from "./pay";
import one from "./1.jpg";
import two from "./2.jpg";
import three from "./3.jpg";
import "./Resort.css";
import "./styles.css";
import "./facility.css";
import Comment from "../Rating&Feedback/Comments";
import { Link } from "react-router-dom";
import { NotEditStar } from "./../Rating&Feedback/Rating";
import Footer from "./Footer";
import "./Footer.css";
import InternalNav from "./../InternalNav/InternalNav";
import FixedMap from "./../../apiMapGoogle/FixedMap";

//import used files

//create Facility Compo
class Facility extends React.Component {
  //render Facility Compo
  render() {
    return (
      <div>
        {Object.keys(this.props.faclitics).length !== 0 ? (
          <div>
            <div className="pack">
              <h1>Our facility</h1>
            </div>
            <section id="packages">
              {Object.keys(this.props.faclitics).map((element, index) => (
                <div className="all">
                  <div class="box">
                    <div class="content2">
                      <div>
                        <h2>{element}</h2>
                        <h3>
                          <br></br>
                          <br></br>
                          quantity: {this.props.faclitics[element].quantity}
                        </h3>
                        <h3>Price: {this.props.faclitics[element].price}</h3>
                      </div>
                    </div>
                    <img src={this.props.faclitics[element].img} />
                  </div>
                </div>
              ))}
            </section>
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
      selectedFacility: "",
      SelectedPrice: 0,
    };
  }

  handleSelection = (selectedVal) => {
    console.log("1111111111111111111111111",selectedVal);
    this.setState({
      selectedFacility: selectedVal,
      SelectedPrice: this.state.faclitics[selectedVal].price || 0,
    });
  };
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

  //render Resort Compo
  render() {
    // const { id } = this.props.match.params.id;
    const { service } = this.state;

    return (
      <div style={{ width: "100%" }}>
        <div>
          <InternalNav />
        </div>
        {/* Slider owner */}
        <div id="slider" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={one} className="d-block w-100" alt="slide1" />
              <div id="caption">
                <h1>welcome to {this.state.owner.placeName}</h1>
                <div className="blured"></div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={two} className="d-block w-100" alt="slide2" />
              <div id="caption">
                <h1>{this.state.owner.placeName}</h1>
                <div className="blured"></div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={three} className="d-block w-100" alt="slide3" />
              <div id="caption">
                <h1>{this.state.owner.placeName}</h1>
                <div className="blured"></div>
              </div>
            </div>
          </div>
        </div>
        {/* ******************************** */}
        {/* *************Owner Information************** */}
        <div id="gar" class="garden3">
          <div class="imgBx2">
            <img src={this.state.owner.licensePhoto} />
          </div>
          <div class="content4">
            <h1>{this.state.owner.placeName}</h1>
            <NotEditStar rate={this.state.owner.ratingAvg} />
            <p>
              We work to provide everything necessary to ensure your comfort and
              enjoy your trip in our facilities
            </p>
            <h5 class="features">Services</h5>
            <ul>
              {service.map((dataIN, key) => (
                <li style={{ width: "400px", height: "50px" }}>{dataIN}</li>
              ))}
            </ul>

            <button
              type="button"
              class="btn btn-info pull-right"
              data-toggle="modal"
              data-target="#exampleModal"
              data-whatever="@mdo"
            >
              Book Now
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Booking facility
                    </h5>
                    <button
                      type="button"
                      class="close "
                      id="cl"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="form-group"></div>
                      <div class="form-group">
                        <Reservation
                          handleSelection={this.handleSelection}
                          ownerId={this.state.ownerId}
                          PlaceName={this.state.owner.placeName}
                        />
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    {/* **************Pay ******************** */}
                    <Pay
                      description={this.state.selectedFacility}
                      owner={this.state.owner}
                      price={this.state.SelectedPrice}
                      PlaceName={this.state.owner.placeName}
                    />

                    {/* <button type="button" class="btn btn-primary" onClick ={Pay}>
                      Send message
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* *************faclitics***************** */}
        <FixedMap
          placeName={this.state.owner.placeName}
          position={this.state.owner.position}
        />
        <div className="facility">
          <Facility faclitics={this.state.faclitics} />
        </div>
        {/* <Reservation ownerId={this.state.ownerId} /> */}
        {/* <Pay /> */}
        <div className="rating">
          {/* *************Comment ***************** */}

          <Comment OwnerId={this.state.ownerId} />
          {/* *************Footer***************** */}
        </div>
        <Footer />
      </div>
    );
  }
}

//render Filtter Compo
export default Resort;

//Check and vaildate
