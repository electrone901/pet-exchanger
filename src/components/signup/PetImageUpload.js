import React, { Component } from "react";
import { Link } from "react-router-dom";
import uploadImg from "../img/uploadImg.png";

class PetImageUpload extends Component {
  constructor() {
    super();
    this.state = {
      image: null,
      imageName: "Choose file"
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  fileSelectedHandler = e => {
    console.log("what");
    if (e.target.files[0]) {
      this.setState({ image: e.target.files[0] });
      this.setState({ imageName: e.target.files[0].name });
    }
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
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
                    <div className="determinate" style={{ width: "90%" }}></div>
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
                <div className="col s12">
                  <div
                    className="form-group"
                    onClick={this.fileSelectedHandler}
                  >
                    <img
                      src={uploadImg}
                      className="col s12"
                      alt="upload image"
                    />

                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text"></span>
                      </div>
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="inputGroupFile01"
                          onChange={this.fileSelectedHandler}
                        />
                        <label
                          className="custom-file-label"
                          htmlFor="inputGroupFile01"
                        >
                          {this.state.imageName}
                        </label>
                      </div>
                    </div>
                  </div>
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
export default PetImageUpload;
