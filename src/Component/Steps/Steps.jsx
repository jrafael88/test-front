import React from "react";
import { connect } from "react-redux";
import { STEPS } from "../../Enum";

import "./Steps.scss";

class Steps extends React.Component {
  render() {
    const { step } = this.props;
    return (
      <div className="steps">
        <ul className="steps-list">
          <li
            className={`steps-list-item ${
              step === STEPS.SHOPPINGCART ? "active" : ""
            }`}
          >
            Sacola
          </li>
          <li
            className={`steps-list-item ${
              step === STEPS.PAYMENT ? "active" : ""
            }`}
          >
            Pagamento
          </li>
          <li
            className={`steps-list-item ${
              step === STEPS.CONFIRMATION ? "active" : ""
            }`}
          >
            Confirmação
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  step: state.steps.step,
});

export default connect(mapStateToProps, null)(Steps);
