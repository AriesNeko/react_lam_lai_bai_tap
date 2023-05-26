import React, { Component } from "react";

export default class Handling extends Component {
  handleSayHello = () => {
    console.log("xin chao");
  };

  handleHelloWithName = (username) => {
    console.log(`hello ${username}`);
  };

  render() {
    return (
      <div className="container">
        <h3>Handling</h3>
        <button onClick={this.handleSayHello} className="btn btn-info my-3">
          HELLO
        </button>
        <br />
        <button
          onClick={() => {
            this.handleHelloWithName("Mimi");
          }}
          className="btn btn-primary my-3"
        >
          HELLO
        </button>
      </div>
    );
  }
}
