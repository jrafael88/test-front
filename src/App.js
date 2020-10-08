import React, { Fragment } from "react";
import Loadable from "react-loadable";

const LoadableShopping = Loadable({
  loader: () => import("./Component/ShoppingCart/ShoppingCart"),
  loading: () => "carregando",
});

const LoadablePayment = Loadable({
  loader: () => import("./Component/Payment/Payment"),
  loading: () => "carregando",
});

const LoadableConfirmation = Loadable({
  loader: () => import("./Component/Confirmation/Confirmation"),
  loading: () => "carregando",
});

class App extends React.Component {
  state = {
    shoppingCart: false,
    payment: true,
    confirmation: false,
  };

  onClickButton = (value) => {
    this.setState({
      shoppingCart: false,
      payment: false,
      confirmation: false,
      [value]: true,
    });
  };

  render() {
    const { shoppingCart, payment, confirmation } = this.state;
    return (
      <div>
        <div>
          <u>
            <li onClick={() => this.onClickButton("shoppingCart")}>Sacola</li>
            <li onClick={() => this.onClickButton("payment")}>Pagamento</li>
            <li onClick={() => this.onClickButton("confirmation")}>
              Confirmação
            </li>
          </u>
        </div>
        <Fragment>
          {shoppingCart && <LoadableShopping showButton={shoppingCart} />}
          {payment && <LoadablePayment />}
          {confirmation && <LoadableConfirmation />}
        </Fragment>
      </div>
    );
  }
}

export default App;
