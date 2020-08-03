import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
        email: '',
        password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(e) {
  this.setState({ [e.target.name]: e.target.value });

}

  //handleSubmit function

handleSubmit(e) {
    e.preventDefault();
///////////need axios ????
    console.log('The form was submitted with the following data:');
    console.log(this.state);
}

  render() {
    return (
      <div className="singIn">
      <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
      <div className="FormField">
          <label>E-Mail Address
          <input
           type="email"
           id="email"
           className="FormField__Input"
           placeholder="Enter your email"
           name="email" 
           value={this.state.email}
            onChange={this.handleChange} />
          </label>
        </div>

        <div className="FormField">
          <label >Password
          <input 
          type="password"
          id="password"
          className="FormField__Input" 
          placeholder="Enter your password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange} />

          </label>
        </div>

        <div className="FormField">
            <button className="FormField__Button mr-20">Sign In</button> <Link to="/" >Create an account</Link>
        </div>
      </form>
    </div>
    );
  }
}
export { SignIn };
