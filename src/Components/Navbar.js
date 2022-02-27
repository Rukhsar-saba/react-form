import React, { Component } from "react";
import Signup from "./Signup";

export class Navbar extends Component {
  render() {
    return (
      <section>
        <div className="navbar-container">
          <div className="box-btn">
            <button className="signup-btn">1</button>
            <p className="signup">Sign Up</p>
          </div>
          <div className="box-btn">
            <button className="signup-btn">2</button>
            <p className="message">Message</p>
          </div>
          <div className="box-btn">
            <button className="signup-btn">2</button>
            <p className="checkbox">Checkbox</p>
          </div>
        </div>
        <Signup />
      </section>
    );
  }
}

export default Navbar;
