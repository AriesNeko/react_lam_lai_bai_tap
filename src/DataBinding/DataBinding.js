import React, { Component } from "react";

export default class DataBinding extends Component {
  urlSrc =
    "https://bjd-shop.com/blog/wp-content/uploads/2021/09/dudu-wuwu_1.jpg";

  renderUserAge = () => {
    return <h3> Age: 3</h3>;
  };
  render() {
    let username = "Trúc";
    return (
      <div>
        <h3>DataBinding</h3>
        <h3>Username: {username}</h3>
        {this.renderUserAge()}
        <img className="container" src={this.urlSrc} alt="" />
        {/* <img
          className="container"
          src="https://bjd-shop.com/blog/wp-content/uploads/2021/09/dudu-wuwu_1.jpg"
          alt=""
        /> */}
      </div>
    );
  }
}
