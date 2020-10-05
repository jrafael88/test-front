import React from "react";
import { Link } from "react-router-dom";

class Payment extends React.Component {
  render() {
    return (
      <div>
        <p>Payment...</p>
        <Link to="/confirmation">Confirmation</Link>
      </div>
    );
  }
}

export default Payment;
