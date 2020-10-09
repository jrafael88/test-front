import React from "react";
import { maskPrice } from "../../Helpers/Mask";

import "./product.scss";

class Product extends React.Component {
  render() {
    const { product } = this.props;

    return (
      <div className="product">
        <div className="product-image">
          <img src={product.imageObjects[0].thumbnail} alt={product.name} />
        </div>
        <div className="product-description">
          <p className="product-description-title">{product.name}</p>
          <p className="product-description-price">
            R$ {maskPrice(product.priceSpecification.price)}
          </p>
        </div>
      </div>
    );
  }
}

export default Product;
