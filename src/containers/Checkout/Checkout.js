import React from "react";
import { useHistory } from "react-router-dom";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";
import classes from "./Checkout.module.css";
export default () => {
  const history = useHistory();
  const ingredients = {
    chocolateCream: 1,
    strawberryCream: 1,
    blueberryСream: 1,
    proteinCream: 1,
    bananaCream: 1,
    vanillaCream: 1,
  };
  const price = 123;

  function checkoutCancel() {
    history.push("/builder");
  }

  function checkoutContinue() {
    history.push("/checkout/form");
  }
  return (
    <div className={classes.Checkout}>
      <CheckoutSummary
        ingredients={ingredients}
        price={price}
        checkoutCancel={checkoutCancel}
        checkoutContinue={checkoutContinue}
      />
    </div>
  );
};
