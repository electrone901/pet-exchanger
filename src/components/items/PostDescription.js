import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostDescription extends Component {
  render() {
    return (
      <div className="card-content valign center">
        <h1 className=""> Post Description </h1>

        <Link to="/" className="waves-effect waves-light btn">
          Submit
        </Link>
      </div>
    );
  }
}
export default PostDescription;
