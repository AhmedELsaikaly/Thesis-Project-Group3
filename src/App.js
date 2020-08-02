import React from "react";
import logo from "./logo.svg";
import { SignIn } from "./Signing/signIn";
import { SignUp } from "./Signing/signUp";
import { About } from "./about/about";
import { Contact } from "./contact/contact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import LandPage from "./landPage/landPage";

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
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
