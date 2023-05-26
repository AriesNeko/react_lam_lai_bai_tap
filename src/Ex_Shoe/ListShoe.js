import React, { Component } from "react";
import ItemShoe from "./ItemShoe";

export default class ListShoe extends Component {
  renderListShoe = () => {
    return this.props.list.map((item) => {
      return (
        <ItemShoe
          handleView={this.props.viewDetail}
          key={item.id}
          data={item}
        />
      );
    });
  };

  render() {
    return (
      <div className="row gap-2 justify-content-center">
        {this.renderListShoe()}
      </div>
    );
  }
}
