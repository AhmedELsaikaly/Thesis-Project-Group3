//import used technologies
import React from "react";
import { Form, Button } from "react-bootstrap";
import { Input } from "reactstrap";
//import CSS
import "./SignUpOwner.css";
import { toast } from "react-toastify";
import Footer from "./../SubPages/Footer/Footer";
// import three from "https://res.cloudinary.com/dtm3d0erl/image/upload/v1598029144/eajqot3wug4lcwvz5doc.jpg";

//import used files
import PhotoUpload from "../PhotoUpload/PhotoUpload";

const axios = require("axios");

//create signup compo
class SignUpOwner extends React.Component {
  //constructor and state
  constructor(props) {
    super(props);
    //change to shcema
    this.state = {
      input: {},
      errors: {},
      serverRes: "",
      message: "",
      fblink: "",
      placeName: "",
      fullName: "",
      password: "",
      Email: "",
      mobileNumber: "",
      licensePhoto: { url: null, isUploaded: false },
      area: "",
      confirm: "",
    };
  }
  //handle licensePhoto uploading
  getLiecencePhotoUrl = (url) => {
    this.setState((prevState) => {
      let licensePhoto = Object.assign({}, prevState.TableUrl);
      licensePhoto.url = url;
      licensePhoto.isUploaded = true;
      return { licensePhoto };
    });
  };
  //handle the password confirmation
  handle = () => {
    if (
      this.state.confirm === this.state.password &&
      this.state.password !== "" &&
      this.state.confirm !== ""
    ) {
      this.setState({ message: "The Two passwords is matched" });
    } else {
      this.setState({ message: "The two passwords in not matched" });
    }
  };

  //handle the change of inputs
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    let input = this.state.input;
    input[e.target.name] = e.target.value;

    this.setState({
      input,
    });
  };

  //handle select for Places
  handleSelect = (e) => {
    this.setState({ area: e.target.value });
    let input = this.state.input;
    input["area"] = e.target.value;

    this.setState({
      input,
    });
  };

  // validate the fields
  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["fullName"]) {
      isValid = false;
      errors["fullName"] = "Please enter your Full Name.";
    }

    if (!input["placeName"]) {
      isValid = false;
      errors["placeName"] = "Please enter your Place Name.";
    }
    if (!input["fblink"]) {
      isValid = false;
      errors["fblink"] = "Please enter your facebook Link.";
    }

    if (this.state.licensePhoto.isUploaded === false) {
      isValid = false;
      errors["licensePhoto"] =
        "Your Liecence Photo is Still Uploading or you not Upload it";
    }
    if (!input["area"] && input["area"] !== "") {
      isValid = false;
      errors["area"] = "Please choose your area.";
    }

    if (!input["Email"]) {
      isValid = false;
      errors["Email"] = "Please enter your email area.";
    }

    if (typeof input["Email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["Email"])) {
        isValid = false;
        errors["Email"] = "Please enter valid email area.";
      }
    }
    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }
    if (typeof input["password"] !== "undefined") {
      if (input["password"].length < 6) {
        isValid = false;
        errors["password"] = "Please add at least 6 charachter.";
      }
    }

    if (!input["confirm"]) {
      isValid = false;
      errors["confirm"] = "Please enter your confirm password.";
    }
    if (!input["mobileNumber"]) {
      isValid = false;
      errors["mobileNumber"] = "Please enter your phone number.";
    }

    if (typeof input["mobileNumber"] !== "undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);
      var numLen = input["mobileNumber"].length;
      var num = Number(input["mobileNumber"]);
      if (!pattern.test(num)) {
        isValid = false;
        errors["mobileNumber"] = "Please enter only number.";
      } else if (numLen != 10) {
        isValid = false;
        errors["mobileNumber"] = "Please enter valid phone number.";
      }
    }
    if (
      typeof input["password"] !== "undefined" &&
      typeof input["confirm"] !== "undefined"
    ) {
      if (input["password"] != input["confirm"]) {
        isValid = false;
        errors["password"] = "Passwords don't match.";
      }
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  //handleSubmit function
  handleSubmit = (e) => {
    e.preventDefault();
    //axios routing , then and catch

    console.log(this.validate());
    if (this.validate()) {
      let input = {};
      input["fullName"] = "";
      input["Email"] = "";
      input["password"] = "";
      input["mobileNumber"] = "";
      input["area"] = "";
      input["confirm"] = "";
      this.setState({ message: "", serverRes: "" });
      this.setState({ input: input });
      axios
        .post("http://localhost:5000/SignUpOwner", {
          fullName: this.state.fullName,
          password: this.state.password,
          email: this.state.Email,
          mobileNumber: this.state.mobileNumber,
          area: this.state.area,
          fblink: this.state.fblink,
          placeName: this.state.placeName,
          licensePhoto: this.state.licensePhoto.url,
        })
        .then((response) => {
          if (response.data.success === false) {
            toast(response.data.message, {
              type: "error",
            });
          } else {
            localStorage.setItem("ownertoken", response.data.token);
            toast("Your Signed Up succesfully ❤", {
              type: "success",
            });
            this.props.history.push(`/ownerRender`);
            return response.data;
          }
        })
        .catch((err) => {
          console.log("ERROR FROM AXIOS ", err);
          this.props.history.push(`/SignUpOwner`);
        });
    }
  };
  // rendering the compo
  render() {
    const { fullName, password, email, mobileNumber, area } = this.state;
    const values = {
      fullName,
      password,
      email,
      mobileNumber,
      area,
    };
    return (
      <div className="all7">
        <div className="signup-form" style={{ marginLeft: "100px" }}>
          <form>
            <h2>Owner Signup</h2>
            <p className="hint-text">
              Create your account. It's free and only takes a minute.
            </p>
            <p className="text-danger">{this.state.errors.fullName}</p>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="fullName"
                placeholder="Full Name"
                required="required"
                value={this.state.input.fullName}
                onChange={this.handleChange}
              />
            </div>
            <p className="text-danger">{this.state.errors.placeName}</p>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="placeName"
                placeholder="Place Name"
                required="required"
                value={this.state.input.placeName}
                onChange={this.handleChange}
              />
            </div>
            <div className="text-danger">{this.state.errors.mobileNumber}</div>
            <div className="form-group">
              <input
                type="tel"
                className="form-control"
                name="mobileNumber"
                placeholder="Mobile No."
                required="required"
                value={this.state.input.mobileNumber}
                onChange={this.handleChange}
              />
            </div>
            <p className="text-danger">{this.state.errors.Email}</p>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="Email"
                value={this.state.input.Email}
                placeholder="Email"
                required="required"
                onChange={this.handleChange}
              />
            </div>
            <p className="text-danger">{this.state.errors.fblink}</p>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="fblink"
                value={this.state.input.fblink}
                placeholder="Facebook Link"
                required="required"
                onChange={this.handleChange}
              />
            </div>
            <p className="text-danger">{this.state.errors.area}</p>
            <select
              id="SelectOptions"
              className="mdb-select md-form"
              searchable="Search here.."
              value={this.state.input.area}
              onChange={this.handleSelect}
            >
              <option value="">Choose Your Place</option>
              <option value="Gaza">Gaza</option>
              <option value="North Gaza">North Gaza</option>
              <option value="Middle Area">Middle Area</option>
              <option value="Khan Younis">Khan Younis</option>
              <option value="Rafah">Rafah</option>
              <option value="Another place">Another place</option>
            </select>
            <p className="text-danger">{this.state.errors.password}</p>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                required="required"
                value={this.state.input.password}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="confirm"
                placeholder="Confirm Password"
                required="required"
                value={this.state.input.confirm}
                onChange={this.handleChange}
                onKeyUp={this.handle}
              />
            </div>
            <p
              style={
                this.state.message === "The two passwords in not matched"
                  ? { color: "red" }
                  : { color: "green" }
              }
            >
              {" "}
              {this.state.message}
            </p>
            <p className="text-danger">{this.state.errors.licensePhoto}</p>
            <p>Please upload Your Licence Photo</p>
            <PhotoUpload handler={this.getLiecencePhotoUrl} Id={"photoOwner"} />
            <div className="form-group">
              <button
                id="signUpBtn"
                type="submit"
                className="btn btn-success btn-lg btn-block"
                onClick={this.handleSubmit}
              >
                Signup as Owner
              </button>
            </div>
            <div className="text-center">
              If You Customer Click here? <a href="/signUp">Sign Up Customer</a>
            </div>
            {/* <div className="text-danger"> {this.state.serverRes}</div> */}
          </form>
          <div className="text-center">
            Already have an account? <a href="/signIn">Sign in</a>
          </div>
        </div>
        <div className="imgDiv"></div>
        <img
          className="boxImg"
          src="https://res.cloudinary.com/dtm3d0erl/image/upload/v1598029144/eajqot3wug4lcwvz5doc.jpg"
        ></img>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
//export SignUp Compo
export default SignUpOwner;

//check and validate
