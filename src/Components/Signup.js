import React, { Component, useState } from "react";
import Nextstep from "./Nextstep";
// import {
//   faCheck,
//   faTimes,
//   faInfoCircle,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      dob: "",
      email: "",
      address: "",
    };
    this.onInputchange = this.onInputchange.bind(this);
    // const F_NAME = /^[a-zA-Z ]{2,30}$/;
    // const EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    // const useRef = useRef();
    // const errRef = useRef();
  }
  onInputchange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { fname, lname, dob, email, address } = this.state;
    return (
      <div className="signup-container">
        <div className="heading">
          <p>Step 1/3</p>
          <h2>Sign UP</h2>
        </div>
        <div className="detail-container">
          <div className="col-1">
            <label htmlFor="fname">
              First Name
              <input
                type="text"
                name="fname"
                // placeholder="Entern First Name..."
                value={fname}
                onChange={this.onInputchange}
                required
              />
              <span>
                Name should be 3-16 Character and shouldn't include any Special
                Character!
              </span>
            </label>
            <label htmlFor="dob">
              Date of Birth
              <input
                type="date"
                name="dob"
                value={dob}
                onChange={this.onInputchange}
              />
            </label>
          </div>
          <div className="col-1">
            <label htmlFor="lname">
              Last Name
              <input
                type="text"
                name="lname"
                value={lname}
                onChange={this.onInputchange}
              />
            </label>
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.onInputchange}
              />
              <span>Its should be valid email!</span>
            </label>
          </div>
        </div>
        <div className="col-1">
          <label htmlFor="address">
            Full Address <br />
            <input
              type="text"
              name="address"
              value={address}
              onChange={this.onInputchange}
            />
          </label>
        </div>
        <Nextstep />
      </div>
    );
  }
}

export default Signup;
