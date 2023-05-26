import React, { Component } from "react";

export default class ItemMovie extends Component {
  render() {
    let movie = this.props.data;
    return (
      <div className="col-2 m-2">
        <div style={{ height: "100%" }} className="card text-left">
          <img className="card-img-top" src={movie.hinhAnh} alt="movie" />
          <div className="card-body">
            <h5 className="card-title">{movie.tenPhim}</h5>
          </div>
        </div>
      </div>
    );
  }
}
