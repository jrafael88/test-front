import React, { Fragment } from "react";
import Loadable from "react-loadable";
import { connect } from "react-redux";

import { getProducts } from "./Actions/ProductsActions";
import { STEPS } from "./Enum";

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
  componentDidMount() {
    this.props.getProducts();
  }

  onClickButton = (value) => {};

  render() {
    const { step } = this.props;

    return (
      <div>
        <div>
          <u>
            <li>Sacola</li>
            <li>Pagamento</li>
            <li>Confirmação</li>
          </u>
        </div>
        <Fragment>
          {step === STEPS.SHOPPINGCART && <LoadableShopping />}
          {step === STEPS.PAYMENT && <LoadablePayment />}
          {step === STEPS.CONFIRMATION && <LoadableConfirmation />}
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  step: state.steps.step,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
