import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <div className="navTitle">
          <h3>
            <Link to="/">Bryan's Lyrics</Link>
          </h3>
        </div>

        <div className="Navigation">
          <input type="text" placeholder="Search Song Lyrics Here" />
        </div>
      </nav>
    );
  }
}

export default Nav;
