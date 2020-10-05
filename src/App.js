import React from "react";
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
    shoppingCart: true,
    payment: false,
    confirmation: false,
  };

  onClickButton = (e) => {
    e.preventDefault();
    console.log("clicou");
    this.setState({ payment: true });
  };

  render() {
    const { shoppingCart, payment, confirmation } = this.state;
    return (
      <div>
        <div>
          <u>
            <li>Sacola</li>
            <li>Pagamento</li>
            <li>Confirmação</li>
          </u>
        </div>
        {shoppingCart && <LoadableShopping />}
        {payment && <LoadablePayment />}
        {confirmation && <LoadableConfirmation />}
      </div>
    );
  }
}

export default App;
