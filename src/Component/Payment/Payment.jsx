import React from "react";
import { connect } from "react-redux";

import paymentValidation from "../../Helpers/paymentValidation";
import { maskDate, maskCard } from "../../Helpers/Mask";
import { setStep } from "../../Actions/StepActions";
import Prices from "../Prices/Prices";
import { STEPS } from "../../Enum";

import "./Payment.scss";

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        card: "",
        name: "",
        validate: "",
        cvv: "",
      },
      error: {},
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    const object = this.state.values;
    const error = paymentValidation(object);
    this.setState({ error });
    if (Object.keys(error).length === 0) {
      this.props.setStep(STEPS.CONFIRMATION);
    }
  };

  handleChange = (e, mask) => {
    const value = mask ? mask(e.target.value) : e.target.value;
    const values = { ...this.state.values, [e.target.id]: value };
    this.setState({ values });
  };

  isError = (key) => {
    return this.state.error.hasOwnProperty(key);
  };

  render() {
    const {
      values: { card, name, validate, cvv },
      error,
    } = this.state;

    const { products } = this.props;

    return (
      <form className="wrapper" onSubmit={this.onSubmit} autoComplete="off">
        <div className="content content-product">
          <div className="content-title">
            <h1>Cartão de Crédito</h1>
          </div>
          <div className="content-description">
            <div className="row">
              <div className="grid grid-col1">
                <div
                  className={`form-group ${
                    this.isError("card") ? "error" : ""
                  }`}
                >
                  <label>Número do cartão:</label>
                  <input
                    type="text"
                    id="card"
                    placeholder="____.____.____.____"
                    value={card}
                    maxLength="19"
                    onChange={(e) => this.handleChange(e, maskCard)}
                  />
                  <span>{error.card && error.card}</span>
                </div>
              </div>
              <div className="grid grid-col1">
                <div
                  className={`form-group ${
                    this.isError("name") ? "error" : ""
                  }`}
                >
                  <label>Nome do Titular:</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Como no cartão"
                    value={name}
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span>{error.name && error.name}</span>
                </div>
              </div>
              <div className="grid grid-col2">
                <div
                  className={`form-group ${
                    this.isError("validate") ? "error" : ""
                  }`}
                >
                  <label>Validade (mês/ano):</label>
                  <input
                    type="text"
                    id="validate"
                    placeholder="__/____"
                    value={validate}
                    maxLength="7"
                    onChange={(e) => this.handleChange(e, maskDate)}
                  />
                  <span>{error.validate && error.validate}</span>
                </div>
              </div>
              <div className="grid grid-col3">
                <div
                  className={`form-group ${this.isError("cvv") ? "error" : ""}`}
                >
                  <label>CVV:</label>
                  <input
                    type="number"
                    id="cvv"
                    placeholder="___"
                    value={cvv}
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span>{error.cvv && error.cvv}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-price">
          <Prices
            subTotal={products.subTotal}
            shippingTotal={products.shippingTotal}
            discount={products.discount}
            total={products.total}
          />
          <button className="btn btn-orange">Finalizar o pedido</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  setStep: (step) => dispatch(setStep(step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
