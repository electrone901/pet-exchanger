import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import ListOfItems from "./components/items/ListOfItems";
import Item from "./components/items/Item";
import Login from "./components/login/Login";
import PetImageUpload from "./components/signup/PetImageUpload";
import PetInfo from "./components/signup/PetInfo";
import PetOwnerSignUp from "./components/signup/PetOwnerSignUp";
import Profile from "./components/user/Profile";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/list-items" component={ListOfItems} />
          <Route exact path="/item" component={Item} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/image-upload" component={PetImageUpload} />
          <Route exact path="/pet-info" component={PetInfo} />
          <Route exact path="/owner-signup" component={PetOwnerSignUp} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
