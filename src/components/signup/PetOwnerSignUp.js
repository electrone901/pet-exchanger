import React, { Component } from "react";
import { Link } from "react-router-dom";
// import logo from './logo.svg';

class PetOwnerSignUp extends Component {
  constructor() {
    super();
    this.state = {
      firstName: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.backToHome = this.backToHome.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    // check all fields are correct before forwarding to the next view
    this.props.history.push("/pet-info");
    console.log("yya");
  }
  backToHome(e) {
    e.preventDefault();
    // check all fields are correct before forwarding to the next view
    this.props.history.push("/");
    console.log("yya");
  }
  render() {
    return (
      <section className="center">
        <div className="container">
          <div className="z-depth-1 grey lighten-4 row custome-form">
            <div className="col s12">
              <div className="row">
                <div className="col s12"></div>
              </div>

              <div className="row">
                <div className="col s12">
                  <div className="progress">
                    <div className="determinate" style={{ width: "15%" }}></div>
                  </div>
                  <div className="left">Account</div>
                  <div className="right">Image</div>
                  <div className="center">Pet</div>
                </div>
              </div>
            </div>
          </div>

          <div className="z-depth-1 grey lighten-4 row custome-form">
            <form onSubmit={this.onSubmit} className="col s12">
              <div className="row">
                <div className="col s12"></div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="text"
                    className="validate"
                    name="firstName"
                    id="firstName"
                  />
                  <label htmlFor="firstName">First name</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="text"
                    className="validate"
                    name="last name"
                    id="last name"
                  />
                  <label htmlFor="last name">Last name</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="email"
                    className="validate"
                    name="email"
                    id="email"
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="validate"
                  />
                  <label htmlFor="password">Password</label>
                </div>

                <div className="input-field col s12">
                  <input
                    type="password"
                    name="confirm password"
                    id="confirm password"
                    className="validate"
                  />
                  <label htmlFor="confirm password">Confirm password</label>
                </div>

                <center>
                  <div className="row">
                    <button
                      type="submit"
                      name="btn_login"
                      className="col s12 btn btn-large waves-effect indigo"
                    >
                      Next
                    </button>
                  </div>
                </center>

                <center>
                  <div className="row">
                    <button
                      onClick={this.backToHome}
                      name="btn_login"
                      className="col s12 btn btn-large waves-effect gray"
                    >
                      Back
                    </button>
                  </div>
                </center>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
export default PetOwnerSignUp;
