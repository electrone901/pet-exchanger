import React, { Component } from "react";
import { Link } from "react-router-dom";
// import logo from './logo.svg';

class PetOwnerSignUp extends Component {
  render() {
    return (
      <div className="card-content valign center">
        <h1 className=""> PetOwnerSignUp </h1>

        <Link to="/" className="waves-effect waves-light btn">
          Submit
        </Link>
      </div>
    );
  }
}
export default PetOwnerSignUp;
