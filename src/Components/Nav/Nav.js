import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <h3>Bryan's Lyrics</h3>
        <div className="Navigation">
          <input type="text" placeholder="Search Song Lyrics Here" />
        </div>
      </nav>
    );
  }
}
