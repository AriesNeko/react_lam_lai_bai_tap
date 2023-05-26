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
    let cloneCart = [...this.state.cart]; // Tạo data mới
    cloneCart.push(shoe);
    this.setState({ cart: cloneCart }); //update cart cũ bằng cart mới
  };

  render() {
    return (
      <div className="p-3">
        <div className="bg-light p-3 rounded">
          <ListShoe
            list={this.state.shoeArr}
            viewDetail={this.handleViewDetail}
          />
        </div>
        <br />
        <DetailShoe detail={this.state.detailShoe} />
        {/* render giỏ hàng */}
        <Cart cart={this.state.cart} />
      </div>
    );
  }
}
