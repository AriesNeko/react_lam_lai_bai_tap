import React, { Component } from "react";

export default class Ex_State_Car extends Component {
  state = {
    url: "./img/CarBasic/products/red-car.jpg",
  };

  handleChangeColor = (color) => {
    this.setState({
      url: `./img/CarBasic/products/${color}-car.jpg`,
    });
  };
  render() {
    return (
      <div className="container">
        <h3>Change color of the car</h3>
        <div className="mt-4">
          <img
            style={{ height: "50%", width: "50%" }}
            src={this.state.url}
            alt="car"
          />
        </div>
        <button
          onClick={() => {
            this.handleChangeColor("red");
          }}
          className="btn btn-outline-danger mt-3 mx-3"
        >
          Red
        </button>
        <button
          onClick={() => {
            this.handleChangeColor("black");
          }}
          className="btn btn-outline-dark mt-3 mx-3"
        >
          Black
        </button>
        <button
          onClick={() => {
            this.handleChangeColor("silver");
          }}
          className="btn btn-outline-light text-dark mt-3 mx-3"
        >
          Silver
        </button>
        <button
          onClick={() => {
            this.handleChangeColor("steel");
          }}
          className="btn btn-outline-secondary mt-3 mx-3"
        >
          Steel
        </button>
      </div>
    );
  }
}
