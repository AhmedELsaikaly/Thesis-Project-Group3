import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Input } from "reactstrap";
import { Col } from "react-bootstrap";
import axios from "axios";
import jwt_decode from "jwt-decode";
export class FacilityProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ownerId: "",
      TableUrl: "",
      SmallTentUrl: "",
      LargeTentUrl: "",
      tableQuant: "",
      tablePrice: "",
      LargeTentQuant: "",
      LargeTentPrice: "",
      SmallTentQuant: "",
      SmallTentPrice: "",
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
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

  handleSubmitSave = (e) => {
    e.preventDefault();
    axios
      .put(`/updateFacility/${this.state.ownerId}`, {
        facilities: {
          table: {
            img: "vjg",
            price: this.state.tablePrice,
            quantity: this.state.tableQuant,
          },
          SmallTents: {
            img: "vjg",
            price: this.state.SmallTentPrice,
            quantity: this.state.SmallTentQuant,
          },
          LargeTents: {
            img: "vjg",
            price: this.state.LargeTentPrice,
            quantity: this.state.LargeTentQuant,
          },
        },
      })
      .then((res) => {
        alert("Save update done");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  GetData = () => {
    axios
      .get(`/showLastDataFacility/${this.state.ownerId}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.result.length > 0) {
          const data = res.data.result[0].facilities;
          this.setState({
            TableUrl: data.table.img,
            SmallTentUrl: data.SmallTents.img,
            LargeTentUrl: data.LargeTents.img,
            tableQuant: data.table.quantity,
            tablePrice: data.table.price,
            LargeTentQuant: data.LargeTents.quantity,
            LargeTentPrice: data.LargeTents.price,
            SmallTentQuant: data.SmallTents.quantity,
            SmallTentPrice: data.SmallTents.price,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <Form style={{ marginLeft: "7%", marginTop: "10%", maxWidth: "80%" }}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Tabels</Form.Label>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Price</Form.Label>
              <Input
                type="number"
                name="tablePrice"
                value={this.state.tablePrice || ""}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Quantity</Form.Label>
              <Input
                type="number"
                name="tableQuant"
                value={this.state.tableQuant || ""}
                onChange={this.handleChange}
              />
            </Form.Group>

            {/* <Form.Group as={Col}>
              <Form.Label>Image Tabels</Form.Label>
              <Input
                type='file'
                name='TableUrl'
                value={this.state.TableUrl}
                onChange={this.handleChange}
              />
            </Form.Group> */}
          </Form.Row>
          <hr></hr>
          <hr></hr>

          {/* ////////////////////// */}
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Small Tents</Form.Label>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Price</Form.Label>
              <Input
                type="number"
                name="SmallTentPrice"
                value={this.state.SmallTentPrice || ""}
                onChange={this.handleChange}
              />{" "}
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Quantity</Form.Label>
              <Input
                type="number"
                name="SmallTentQuant"
                value={this.state.SmallTentQuant || ""}
                onChange={this.handleChange}
              />{" "}
            </Form.Group>

            {/* <Form.Group as={Col}>
              <Form.Label>Image Small Tents</Form.Label>
              <Input
                type='file'
                name='SmallTentUrl'
                value={this.state.SmallTentUrl}
                onChange={this.handleChange}
              />{' '}
            </Form.Group> */}
          </Form.Row>

          <hr></hr>
          <hr></hr>

          {/* ////////////////////// */}
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Large Tents</Form.Label>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Price</Form.Label>
              <Input
                type="number"
                name="LargeTentPrice"
                value={this.state.LargeTentPrice || ""}
                onChange={this.handleChange}
              />{" "}
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Quantity</Form.Label>
              <Input
                type="number"
                name="LargeTentQuant"
                value={this.state.LargeTentQuant || ""}
                onChange={this.handleChange}
              />{" "}
            </Form.Group>

            {/* <Form.Group as={Col}>
              <Form.Label>Image Large Tents</Form.Label>
              <Input
                type='file'
                name='LargeTentUrl'
                value={this.state.LargeTentUrl}
                onChange={this.handleChange}
              />{' '}
            </Form.Group> */}
          </Form.Row>

          <Button
            variant="primary"
            type="submit"
            onClick={this.handleSubmitSave}
          >
            SAVE
          </Button>
        </Form>
      </div>
    );
  }
}

export default FacilityProfile;
