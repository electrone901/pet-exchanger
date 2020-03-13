import React, { Component } from "react";
import { Link } from "react-router-dom";
// import logo from './logo.svg';

class PetOwnerSignUp extends Component {
  render() {
    return (
      <section className="center">
        <div className="container">
          <div className="z-depth-1 grey lighten-4 row custome-form">
            <form action="post" className="col s12">
              <div class="row">
                <div class="col s12"></div>
              </div>
              {/* <h5 className="indigo-text"> Please, login into your account</h5> */}

              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="text"
                    className="validate"
                    name="first name"
                    id="first name"
                  />
                  <label htmlFor="first name">First name</label>
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
                      type="submit"
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
