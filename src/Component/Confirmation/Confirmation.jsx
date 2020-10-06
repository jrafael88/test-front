import React, { Fragment } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

import "./Confirmation.scss";

class Confirmation extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="content content-confirmation">
          <div className="confirmation-success">
            <i className="confirmation-success-icon" />
            <p className="confirmation-success-text">Compra Efetuada com sucesso</p>
          </div>
          <div className="content-title">
            <h1>Pagamento</h1>
          </div>
          <div className="content-description">
            <p className="confirmation-data">
              ****.****.****.1234
              <br />
              JOSÉ DA SILVA
              <br />
              05/2019
            </p>
          </div>
        </div>
        <ShoppingCart />
      </Fragment>
    );
  }
}
export default Confirmation;
