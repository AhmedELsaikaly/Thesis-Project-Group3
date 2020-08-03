import React from "react";
import logo from "./logo.svg";
import { SignIn } from "./Components/Signing/signIn";
import { SignUp } from "./Components/Signing/signUp";
import { About } from "./Components/about/about";
import { Contact } from "./Components/contact/contact";
import LandPage from "./Components/landPage/landPage";

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
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
