import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    let { cart, handleDelete, handleChangeQuantity } = this.props;
    return (
      <div className="col-6">
        <h4>CART</h4>
        <table class="table table-bordered table-striped">
          <thead>
            <tr className="text-center">
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((id) => {
              return (
                <tr key={id.id}>
                  <td>{id.name}</td>
                  <td>{id.price * id.quantity}</td>
                  <td className="text-center">
                    <button
                      onClick={() => {
                        handleChangeQuantity(id.id, -1);
                      }}
                      className="btn btn-outline-secondary btn-sm"
                    >
                      -
                    </button>
                    <span className="mx-2">{id.quantity}</span>
                    <button
                      onClick={() => {
                        handleChangeQuantity(id.id, 1);
                      }}
                      className="btn btn-outline-secondary btn-sm"
                    >
                      +
                    </button>
                  </td>
                  <td className="text-center">
                    <img style={{ width: 50 }} src={id.image} alt="shoe" />
                  </td>
                  <td className="text-center">
                    <button
                      onClick={() => {
                        handleDelete(id.id);
                      }}
                      className="btn btn-danger btn-sm"
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
