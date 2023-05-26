import React, { Component } from "react";

export default class State_SetState extends Component {
  state = {
    soLuong: 1,
  };

  handleGiam = () => {
    this.setState({
      soLuong: this.state.soLuong - 1,
    });
  };

  handleTang = () => {
    this.setState({
      soLuong: this.state.soLuong + 1,
    });
  };
  render() {
    return (
      <div className="container mt-2">
        <h3>Demo of State and setState</h3>
        <button onClick={this.handleGiam} className="btn btn-warning my-3">
          -
        </button>
        <span className="mx-3 my-3">{this.state.soLuong}</span>
        <button onClick={this.handleTang} className="btn btn-warning my-3">
          +
        </button>
      </div>
    );
  }
}
