import React, { Component } from "react";

class Artist extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Artist">
        <h1>Artist</h1>
      </div>
    );
  }
}

export default Artist;
