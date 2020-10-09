import React, { Fragment } from "react";
import { connect } from "react-redux";

import { setStep } from "../../Actions/StepActions";
import Product from "../Product/Product";
import Prices from "../Prices/Prices";
import { STEPS } from "../../Enum";

import "./ShoppingCart.scss";

class ShoppingCart extends React.Component {
  onClickButton = () => {
    this.props.setStep(STEPS.PAYMENT);
  };

  render() {
    const { step, products, loading } = this.props;

    return (
      <Fragment>
        {!loading &&
          <div className="wrapper">
            <div className="content content-product">
              <div className="content-title">
                <h1>Produtos</h1>
              </div>
              <div className="content-description">
                <ul className="product-list">
                  {products.items.map((item, index) => (
                    <li
                      className="product-list-item"
                      key={`${item.product.name}_${index}`}
                    >
                      <Product product={item.product} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="box-price">
              <Prices
                subTotal={products.subTotal}
                shippingTotal={products.shippingTotal}
                discount={products.discount}
                total={products.total}
              />
              {step === STEPS.SHOPPINGCART && (
                <button className="btn btn-orange" onClick={this.onClickButton}>
                  Seguir para o pagamento
                </button>
              )}
            </div>
            )
          </div>
        }
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  step: state.steps.step,
  products: state.products,
  loading: state.products.loading,
});

const mapDispatchToProps = (dispatch) => ({
  setStep: (step) => dispatch(setStep(step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
