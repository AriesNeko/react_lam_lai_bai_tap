import React, { Component } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default class LayoutHTML extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
