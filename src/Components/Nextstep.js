import React, { Component } from "react";

class Nextstep extends Component {
  onSubmit = (e) => {
    const isValid = this.form;
  };
  render() {
    return (
      <div className="next-btn-container">
        {/* <button className="back">Back</button> */}
        <button type="submit" onSubmit={onSubmit} className="next-btn">
          Next Step
        </button>
      </div>
    );
  }
}

export default Nextstep;
