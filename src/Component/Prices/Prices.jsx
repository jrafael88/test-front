import React from "react";

import "./Price.scss";

class Prices extends React.Component {
  render() {
    const { subTotal, shippingTotal, discount, total } = this.props;
    return (
      <div className="price">
        <div className="price-item">
          <p>Produtos</p>
          <p> R$ {subTotal}</p>
        </div>
        <div className="price-item">
          <p>Frete</p>
          <p> R$ {shippingTotal}</p>
        </div>
        <div className="price-item">
          <p className="orange">Desconto</p>
          <p className="orange"> R$ {discount}</p>
        </div>
        <div className="price-item">
          <p className="bold">Total</p>
          <p className="bold"> R$ {total}</p>
        </div>
      </div>
    );
  }
}

export default Prices;
