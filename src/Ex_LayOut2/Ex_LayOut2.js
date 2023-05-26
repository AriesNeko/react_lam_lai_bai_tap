import React, { Component } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Content from "./Content";
import Footer from "./Footer";

export default class Ex_LayOut2 extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-4 p-0">
            <Navigation />
          </div>
          <div className="col-8 p-0">
            <Content />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
