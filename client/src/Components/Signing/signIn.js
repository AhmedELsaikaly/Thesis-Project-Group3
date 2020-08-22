//import used technologies
import React from "react";
import axios from "axios";
import { authintication } from "./../RoutesType/ProtectedRoute";
import { toast } from "react-toastify";
import Footer from "./../SubPages/Footer/Footer";
// import one from "./1.jpg";
import "./signIn.css";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      serverRes: "",
      input: {},
      errors: {},
    };
  }

  //handleChange function
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    let input = this.state.input;
    input[e.target.name] = e.target.value;

    this.setState({
      input,
    });
  };

  //validate function
  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;
    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email .";
    }
    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }
    this.setState({
      errors: errors,
    });

    return isValid;
  }

  //handleSubmit function
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      let input = {};
      input["password"] = "";
      input["email"] = "";
      this.setState({ serverRes: "" });
      this.setState({ input: input });
      if (document.getElementById("checkbox").checked) {
        axios
          .post("http://localhost:5000/loginOwner", {
            password: this.state.password,
            email: this.state.email,
          })
          .then((response) => {
            if (response.data.success === false) {
              toast(response.data.message, {
                type: "error",
              });
            } else {
              localStorage.setItem("ownertoken", response.data.token);
              toast("Your Signed In succesfully ❤", {
                type: "success",
              });
              this.props.history.push(`/ownerRender`);
              return response.data;
            }
          })
          .catch((err) => {
            this.props.history.push(`/signIn`);
          });
      } else {
        axios
          .post("http://localhost:5000/loginCustomer", {
            password: this.state.password,
            email: this.state.email,
          })
          .then((response) => {
            if (response.data.success === false) {
              toast(response.data.message, {
                type: "error",
              });
            } else {
              localStorage.setItem("usertoken", response.data.token);
              toast("Your Signed In succesfully ❤", {
                type: "success",
                autoClose: 2000,
              });
              this.props.history.push(`/`);
              return response.data;
            }
          })
          .catch((err) => {
            this.props.history.push(`/signIn`);
          });
      }
    }
  };

  //render SignIn compo
  render() {
    return (
      <div>
        <div className="all1">
          <div
            className="login-form"
            style={{
              marginLeft: "300px",
              marginTop: "69px",
              height: "400px",
              position: "absolute",
            }}
          >
            <form>
              <div className="avatar">
                <i className="material-icons">&#xE7FF;</i>
              </div>
              <h4 className="modal-title">Login to Your Account</h4>
              <div className="text-danger">{this.state.errors.email}</div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  onChange={this.handleChange}
                  value={this.state.input.email}
                />
              </div>
              <div className="text-danger">{this.state.errors.password}</div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={this.state.input.Password}
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>

              <div class="form-group">
                <label class="checkbox">
                  <input id="checkbox" type="checkbox" required="required" />{" "}
                  Login as Owner
                </label>
              </div>
              <input
                type="submit"
                className="btn btn-primary btn-block btn-lg"
                value="Login"
                onClick={this.handleSubmit}
              />
            </form>
            <p className="text-danger">{this.state.serverRes}</p>
            <div className="text-center large">
              Don't have an account? <a href="/signUp">Sign up</a>
            </div>
          </div>

          <img
            className="imgBox1"
            src="https://res.cloudinary.com/dtm3d0erl/image/upload/v1598029252/bfzj2vat3m27z38jhomw.jpg"
            alt=""
          ></img>
        </div>
        <Footer />
      </div>
    );
  }
}

//export SignIn Compo
export { SignIn };

//check and validate
