import React from "react";
import { maskPrice } from "../../Helpers/Mask";

import "./Price.scss";

class Prices extends React.Component {
  render() {
    const { subTotal, shippingTotal, discount, total } = this.props;
    return (
      <div className="price">
        <div className="price-item">
          <p>Produtos</p>
          <p> R$ {maskPrice(subTotal)}</p>
        </div>
        <div className="price-item">
          <p>Frete</p>
          <p> R$ {maskPrice(shippingTotal)}</p>
        </div>
        <div className="price-item">
          <p className="orange">Desconto</p>
          <p className="orange"> R$ {maskPrice(discount)}</p>
        </div>
        <div className="price-item">
          <p className="bold">Total</p>
          <p className="bold"> R$ {maskPrice(total)}</p>
        </div>
      </div>
    );
  }
}

export default Prices;
