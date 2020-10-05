import React from "react";

import "./Price.scss";

class Prices extends React.Component {
  render() {
    return (
      <div className="price">
        <div className="price-item">
          <p>Produtos</p>
          <p> R$ 624,80</p>
        </div>
        <div className="price-item">
          <p>Frete</p>
          <p> R$ 5,30</p>
        </div>
        <div className="price-item">
          <p className="orange">Desconto</p>
          <p className="orange"> R$ -30,00</p>
        </div>
        <div className="price-item">
          <p className="bold">Total</p>
          <p className="bold"> R$ 600,10</p>
        </div>
      </div>
    );
  }
}

export default Prices;
