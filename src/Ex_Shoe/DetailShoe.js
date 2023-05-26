import React, { Component } from "react";

export default class DetailShoe extends Component {
  render() {
    let { name, price, quantity, shortDescription } = this.props.detail;
    return (
      <div>
        <h4>SHOE DETAIL</h4>
        <table class="table table-light table-striped table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Short Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">{name}</td>
              <td>{price}</td>
              <td>{quantity}</td>
              <td>{shortDescription}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
