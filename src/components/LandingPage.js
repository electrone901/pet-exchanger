import React, { Component } from "react";
import { Link } from "react-router-dom";
// import logo from './logo.svg';

class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <div className="container">
            <div id="branding">
              <h1>
                {" "}
                <span className="highlight">Web</span> Amigos Design
              </h1>
            </div>
          </div>
          <div className="container">
            <div id="branding">
              <h1>
                {" "}
                <span className="highlight">Web</span> Amigos Design
              </h1>
            </div>
          </div>
        </header>

        <Link to="/" className="waves-effect waves-light btn">
          Submit
        </Link>
      </div>
    );
  }
}
export default LandingPage;
