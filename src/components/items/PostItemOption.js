import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostItemOption extends Component {
  constructor() {
    super();
    this.state = {
      exchangeType: ""
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    e.preventDefault();
    console.log("Yay!", e.target.value);
    // this.props.history.push("/post-description");
  }
  render() {
    return (
      <section className="center">
        <div className="container">
          <div className="z-depth-1 grey lighten-4 row custome-form">
            <h5 className=""> I am looking for ... </h5>
            <div className="col s12">
              <div className="row">
                <div className="col s12"></div>
              </div>

              <div className="row">
                <center>
                  <div className="row">
                    <button
                      name="btn_login"
                      value="Exchange Similar Items"
                      className="col s12 btn btn-large waves-effect indigo"
                      onClick={this.onClick}
                    >
                      Exchange Similar Items
                    </button>
                  </div>
                </center>
                <center>
                  <div className="row">
                    <button
                      name="btn_login"
                      value="Exchange Some Items"
                      className="col s12 btn btn-large waves-effect indigo"
                      onClick={this.onClick}
                    >
                      Exchange Some Items
                    </button>
                  </div>
                </center>
                <center>
                  <div className="row">
                    <button
                      name="btn_login"
                      value="Donations"
                      className="col s12 btn btn-large waves-effect indigo"
                      onClick={this.onClick}
                    >
                      Donations
                    </button>
                  </div>
                </center>
                <center>
                  <div className="row">
                    <button
                      name="btn_login"
                      value="Other"
                      className="col s12 btn btn-large waves-effect indigo"
                      onClick={this.onClick}
                    >
                      Other
                    </button>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default PostItemOption;
