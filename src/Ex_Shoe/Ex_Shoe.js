import React, { Component } from "react";
import { shoeArr } from "./dataShoe";
import ListShoe from "./ListShoe";
import DetailShoe from "./DetailShoe";
import Cart from "./Cart";

export default class Ex_Shoe extends Component {
  state = {
    shoeArr: shoeArr,
    detailShoe: shoeArr[0],
    cart: [], //push giày vào giỏ hàng
  };

  // Xử lý change detail: thay đổi data bằng setState => truyền thông qua trung gian List Shoe => truyền vào nút View detail trong item
  handleViewDetail = (shoe) => {
    this.setState({ detailShoe: shoe });
  };

  handleAddToCart = (shoe) => {
    // Tạo mảng data mới
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex((item) => item.id == shoe.id);
    if (index == -1) {
      // cloneCart.push(shoe);
      // Tạo object shoe mới và thêm key quantity
      let newShoe = { ...shoe, quantity: 1 };
      cloneCart.push(newShoe);
    } else {
      cloneCart[index].quantity = cloneCart[index].quantity + 1;
    }

    //update cart cũ bằng cart mới
    this.setState({ cart: cloneCart });
  };

  //   Xử lí xóa cart
  handleDelete = (idShoe) => {
    let cloneCart = this.state.cart.filter((item) => item.id !== idShoe);
    this.setState({ cart: cloneCart });
  };

  // Xử lí tăng/ giảm
  handleChangeQuantity = (idShoe, option) => {
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex((item) => item.id === idShoe);
    cloneCart[index].quantity = cloneCart[index].quantity + option;
    if (cloneCart[index].quantity == 0) {
      cloneCart.splice(index, 1);
    }
    this.setState({ cart: cloneCart });
  };

  render() {
    return (
      <div className="p-2">
        <div className="bg-light p-3 rounded">
          <div className="row">
            {/* render giỏ hàng */}
            <Cart
              cart={this.state.cart}
              handleDelete={this.handleDelete}
              handleChangeQuantity={this.handleChangeQuantity}
            />
            <ListShoe
              list={this.state.shoeArr}
              viewDetail={this.handleViewDetail}
              handleAddToCart={this.handleAddToCart}
            />
          </div>
        </div>
        <br />
        <DetailShoe detail={this.state.detailShoe} />
      </div>
    );
  }
}
