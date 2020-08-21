import React, { Component } from "react";
import "./RenderOwnerData.css";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Form, Button } from "react-bootstrap";
import { Input } from "reactstrap";
import { Col } from "react-bootstrap";
import ContolPanel from "../ControlPanel/ControlPanel";
import Map from "../../apiMapGoogle/Map";
class RenderOwnerData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      ownerDetail: [],
      status: false,
    };
  }
  componentDidMount() {
    const token = localStorage.ownertoken;
    const decoded = jwt_decode(token);
    this.setState({
      ownerId: decoded.id,
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.ownerId !== this.state.ownerId) {
      this.GetData();
    }
  }

  GetData = () => {
    axios
      .get(`/getAllOwnerData/${this.state.ownerId}`)
      .then((result) => {
        const data = result.data;
        this.setState({ ownerDetail: data, status: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <ContolPanel />
        <div
          className="formData"
          // style={{
          //   backgroundImage: `url(${this.state.ownerDetail.ownerData.licensePhoto})`,
          // }}
        >
          <Form
            style={{
              marginLeft: "10%",
              marginTop: "-120%",
              maxWidth: "80%",
            }}
          >
            {this.state.status === true ? (
              <div>
                {console.log(
                  Object.keys(this.state.ownerDetail.facilities[0].facilities)
                )}
                <div className="ownerData">
                  <Form.Row>
                    <Form.Group as={Col}>
                      <p className="dataP">
                        Hi {this.state.ownerDetail.ownerData.fullName}
                      </p>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <p className="dataP">
                        Your Phone :{" "}
                        {this.state.ownerDetail.ownerData.mobileNumber}
                      </p>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <p className="dataP">
                        Your Resorts Name :{" "}
                        {this.state.ownerDetail.ownerData.placeName}
                      </p>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row></Form.Row>
                </div>
                <div style={{ marginLeft: "15%" }}>
                  <Map />
                </div>

                <section className="ownerFacilites">
                  {Object.keys(
                    this.state.ownerDetail.facilities[0].facilities
                  ).map((element, index) => (
                    <div className="OwnerImage">
                      <div class="box">
                        <div class="content2">
                          <div>
                            <h2>{element}</h2>
                            <h3>
                              <br></br>
                              <br></br>
                              quantity:{" "}
                              {
                                this.state.ownerDetail.facilities[0].facilities[
                                  element
                                ].quantity
                              }
                            </h3>
                            <h3>
                              Price:{" "}
                              {
                                this.state.ownerDetail.facilities[0].facilities[
                                  element
                                ].price
                              }
                            </h3>
                          </div>
                        </div>
                        <img
                          className="img-rounded"
                          src={
                            this.state.ownerDetail.facilities[0].facilities[
                              element
                            ].img
                          }
                        />
                      </div>
                    </div>
                  ))}
                </section>
                <div
                  style={{
                    marginLeft: "55%",
                  }}
                >
                  <Button>
                    <a
                      style={{
                        color: "black",
                      }}
                      href="/ownerProfile"
                    >
                      Edit Your Data
                    </a>
                  </Button>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </Form>
        </div>
      </div>
    );
  }
}

export default RenderOwnerData;
