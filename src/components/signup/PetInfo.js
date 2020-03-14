import React, { Component } from "react";
import { Link } from "react-router-dom";
// import logo from './logo.svg';

class PetInfo extends Component {
  constructor() {
    super();
    this.state = {
      firstName: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.backToSignup = this.backToSignup.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    // check all fields are correct before forwarding to the next view
    this.props.history.push("/image-upload");
  }
  backToSignup(e) {
    e.preventDefault();
    console.log("should go to signup");
    // check all fields are correct before forwarding to the next view
    this.props.history.push("/owner-signup");
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
                    <div className="determinate" style={{ width: "55%" }}></div>
                  </div>
                  <div className="left">Account</div>
                  <div className="right">Image</div>
                  <div className="center">Pet</div>
                </div>
              </div>
            </div>
          </div>

          <div className="z-depth-1 grey lighten-4 row custome-form">
            <form onClick={this.onSubmit} className="col s12">
              <div className="row">
                <div className="col s12"></div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="text"
                    className="validate"
                    name="pet name"
                    id="pet name"
                  />
                  <label htmlFor="pet name">Pet name</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="text"
                    className="validate"
                    name="favorite food"
                    id="favorite food"
                  />
                  <label htmlFor="favorite food">Favorite food</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="text"
                    className="validate"
                    name="favoriteToy"
                    id="favoriteToy"
                  />
                  <label htmlFor="favoriteToy">Favorite Toy</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="text"
                    className="validate"
                    name="location"
                    id="location"
                  />
                  <label htmlFor="location">Location</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="text"
                    className="validate"
                    name="petBio"
                    id="petBio"
                  />
                  <label htmlFor="location">Pet Bio</label>
                </div>
              </div>

              <div className="row">
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
                      onClick={this.backToSignup}
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
export default PetInfo;
