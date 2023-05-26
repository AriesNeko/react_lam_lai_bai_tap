import React, { Component } from "react";

export default class ItemShoe extends Component {
  render() {
    let { data, handleView } = this.props;
    let { image, name } = data;
    return (
      <div className="col-2 p-2">
        <div className="card text-left h-100 w-100">
          <img className="card-img-top" src={image} alt="shoe" />
          <div className="card-body text-center">
            <h5 className="card-title">{name}</h5>
          </div>
          <button
            onClick={() => {
              handleView(data);
            }}
            className="btn btn-info"
          >
            View detail
          </button>
          <button className="btn btn-warning">Add to cart</button>
        </div>
      </div>
    );
  }
}
