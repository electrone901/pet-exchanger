import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostDescription extends Component {
  constructor() {
    super();
    this.state = {
      exchangeType: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    // check all fields are correct before forwarding to the next view
    this.props.history.push("/item");
  }
  fileSelectedHandler = e => {
    if (e.target.files[0]) {
      this.setState({ image: e.target.files[0] });
      this.setState({ imageName: e.target.files[0].name });
    }
  };
  render() {
    return (
      <section className="center">
        <div className="container">
          <div className="z-depth-1 grey lighten-4 row custome-form">
            <form onSubmit={this.onSubmit} className="col s12">
              <div class="input-field col s12">
                <textarea
                  id="textarea1"
                  className="materialize-textarea"
                ></textarea>
                <label for="textarea1">Item Description</label>
              </div>

              <div class="input-field col s12">
                <textarea
                  id="textarea1"
                  className="materialize-textarea"
                ></textarea>
                <label for="textarea1">
                  In exchange for this product, I want
                </label>
              </div>

              <div className="col s12">
                <div className="label-image">
                  <span>Upload an image</span>
                </div>
                <div>
                  <input
                    name="Image"
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile01"
                    onChange={this.fileSelectedHandler}
                  />
                </div>
              </div>

              <div className="col s12">
                <div className="row">
                  <div className="col s12"></div>
                </div>

                <div className="row">
                  <center>
                    <div className="row">
                      <button
                        type="submit"
                        name="btn_login"
                        className="col s12 btn btn-large waves-effect indigo"
                      >
                        Submit
                      </button>
                    </div>
                  </center>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
export default PostDescription;
