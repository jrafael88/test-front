import React from "react";
import Prices from "../Prices/Prices";
import Product from "../Product/Product";

import "./ShoppingCart.scss";
import data from "./Data.json";

class ShoppingCart extends React.Component {
  render() {
    const { showButton } = this.props;
    return (
      <div className="wrapper">
        <div className="content content-product">
          <div className="content-title">
            <h1>Produtos</h1>
          </div>
          <div className="content-description">
            <ul className="product-list">
              {data.items.map((item, index) => (
                <li
                  className="product-list-item"
                  key={`${item.product.name}_${index}`}
                >
                  <Product product={item.product} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="box-price">
          <Prices
            subTotal={data.subTotal}
            shippingTotal={data.shippingTotal}
            discount={data.discount}
            total={data.total}
          />
          {showButton && (
            <button className="btn btn-orange">Seguir para o pagamento</button>
          )}
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
