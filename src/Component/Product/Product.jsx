import React from "react";

import "./product.scss";

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <div className="product-image">
          <img src="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png" />
        </div>
        <div className="product-description">
          <p className="product-description-title">
            "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium -
            Máscara de Reconstrução 500g"
          </p>
          <p className="product-description-price">R$ 225,90</p>
        </div>
      </div>
    );
  }
}

export default Product;
