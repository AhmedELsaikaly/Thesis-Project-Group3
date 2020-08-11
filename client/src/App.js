//import used technologies
import React from "react";
import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//import CSS
import "./App.css";

//import used files
import { SignIn } from "./Components/Signing/signIn";
import SignUp from "./Components/Signing/signUp.js";
import { About } from "./Components/SubPages/About/About";
import { Contact } from "./Components/SubPages/Contact/Contact";
import LandPage from "./Components/landPage/landPage";
import { UserPage } from "./Components/userPage/userPage";
// import { Reservation } from "./Components/userPage/reservation";
import { Footer } from "./Components/SubPages/Footer/Footer.js";
import { Policy } from "./Components/SubPages/Policy/Policy.js";
import ContolPanel from "./Components/ControlPanel/ControlPanel";
import Facility from "./Components/Facility/Facility";
import Service from "./Components/Service/Service";
import SignUpOwner from "./Components/SignUpOwner/SignUpOwner";
import Resort from "./Components/userPage/resort";
import OwnerProfile from "./Components/ownerProfile/ownerProfile.js";
import CustomerProfile from "./Components/customerProfile/customerProfile.js";
import "./App.css";

import OwnerBooking from "./Components/ownerBooking/ownerBooking.js";
import { UserReservation } from "./Components/userReservation/userReservation.js";
import { ProtectedRoute } from "./Components/RoutesType/ProtectedRoute";
import { LoggedInRoute } from "./Components/RoutesType/LoggedInRoute";

//create App Compo
class App extends React.Component {
  state = {};

  //render App Compo
  render() {
    return (
      <div>
        {/* Routes , switching and private routers*/}
        <Router>
          <Switch>
            <Route exact path="/" component={LandPage} />
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/signIn" component={SignIn} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/logout" component={UserPage} />
            {/* <Route exact path="/reservation" component={Reservation} /> */}
            <Route exact path="/Policy" component={Policy} />
            <Route exact path="/SignUpOwner" component={SignUpOwner} />
            <Route exact path="/ContolPanel" component={ContolPanel} />
            <Route exact path="/Facility" component={Facility} />
            <Route exact path="/Service" component={Service} />
            <Route exact path="/resort/:id" component={Resort} />
            <Route exact path="/ownerProfile" component={OwnerProfile} />
            <Route exact path="/customerProfile" component={CustomerProfile} />
            <Route exact path="/ownerBooking" component={OwnerBooking}></Route>
            <Route
              exact
              path="/userReservation"
              component={UserReservation}
            ></Route>

            {/* <Route exact path="/" component={booking}></Route> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

//export App
export default App;

//Check and validate
