import React from "react";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";
import classes from "./Checkout.module.css";

export default () => {
  const ingredients = {
    chocolateCream: 1,
    strawberryCream: 1,
    blueberryСream: 1,
    proteinCream: 1,
    bananaCream: 1,
    vanillaCream: 1,
  };
  const price = 123;
  return (
    <div className={classes.Checkout}>
      <CheckoutSummary ingredients={ingredients} price={price} />
    </div>
  );
};
