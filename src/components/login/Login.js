import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <section className="center">
        <div className="container">
          <div className="z-depth-1 grey lighten-4 row custome-form">
            <form action="post" className="col s12">
              <div class="row">
                <div class="col s12"></div>
              </div>
              <h5 className="indigo-text"> Please, login into your account</h5>

              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="email"
                    className="validate"
                    name="email"
                    id="email"
                  />
                  <label htmlFor="email">Enter your email</label>
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
                  <label htmlFor="password">Enter your password</label>
                </div>
                <label className="forgot">
                  <a href="#!" className="pink-text">
                    <b>Forgot Password?</b>
                  </a>
                </label>
                <center>
                  <div className="row">
                    <button
                      type="submit"
                      name="btn_login"
                      className="col s12 btn btn-large waves-effect indigo"
                    >
                      Login
                    </button>
                  </div>
                </center>
              </div>
            </form>
            <p className="agreement">
              Don't have an account yet.
              <Link to="/owner-signup"> Click here </Link>
              to make one.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
export default Login;
