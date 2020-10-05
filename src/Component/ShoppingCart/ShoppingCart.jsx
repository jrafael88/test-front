import React from "react";
import Prices from "../Prices/Prices";
import Product from "../Product/Product";

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <div className="content-title">
          <h1>Produtos</h1>
        </div>
        <div className="content">
          <Product />
        </div>
        <Prices />
      </div>
    );
  }
}

export default ShoppingCart;
