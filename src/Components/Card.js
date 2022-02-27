import React, { Component } from "react";
import image1 from "./img/bg-pic5.jpg";
import Navbar from "./Navbar";
// import Signup from "./Signup";
// import Nextstep from "./Nextstep";

export class Card extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="side-container">
          <img src={image1} />
        </div>
        <main>
          <Navbar />
        </main>
        {/* <Signup />
        <Nextstep /> */}
      </div>
    );
  }
}

export default Card;
