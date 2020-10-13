import React, { Fragment } from "react";
import Loadable from "react-loadable";
import { connect } from "react-redux";

import Loading from "./Component/Loading/Loading"
import { getProducts } from "./Actions/ProductsActions";
import Steps from "./Component/Steps/Steps";
import { STEPS } from "./Enum";

const LoadableShopping = Loadable({
  loader: () => import("./Component/ShoppingCart/ShoppingCart"),
  loading: () => <Loading />,
});

const LoadablePayment = Loadable({
  loader: () => import("./Component/Payment/Payment"),
  loading: () => <Loading />,
});

const LoadableConfirmation = Loadable({
  loader: () => import("./Component/Confirmation/Confirmation"),
  loading: () => <Loading />,
});

class App extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { step } = this.props;

    return (
      <div>
        <Steps />
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
