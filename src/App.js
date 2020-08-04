import React from "react";
import logo from "./logo.svg";
import { SignIn } from "./Components/Signing/signIn";
import { SignUp } from "./Components/Signup/signup.js";
import { About } from "./Components/about/About";
import { Contact } from "./Components/contact/Contact";
import LandPage from "./Components/landPage/landPage";
import { UserPage } from "./Components/userPage/userPage";
import { Reservation } from "./Components/userPage/reservation";
import { Footer } from "./Components/Footer/Footer.js";
import { Policy } from "./Components/Policy/Policy.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={LandPage}></Route>
            <Route exact path="/signUp" component={SignUp}></Route>
            <Route exact path="/signIn" component={SignIn}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route exact path="/logout" component={UserPage}></Route>
            <Route exact path="/reservation" component={Reservation}></Route>
            <Route exact path="/Footer" component={Footer}></Route>
            <Route exact path="/Policy" component={Policy}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
