import React, { Component } from "react";
import { movieArr } from "./dataPhim";
import ItemMovie from "./ItemMovie";

export default class RenderWithMap extends Component {
  renderMovieList = () => {
    return movieArr.map((movie) => {
      return <ItemMovie key={movie.maPhim} data={movie} />;
    });
  };

  render() {
    return <div className="row ">{this.renderMovieList()}</div>;
  }
}
