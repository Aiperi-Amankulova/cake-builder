import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";
import Cake from "../../CakeBuilder/Cake/Cake";

export default ({ ingredients, price, checkoutContinue, checkoutCancel }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <Cake ingredients={ingredients} price={price} />
      <Button click={checkoutCancel} red>
        {" "}
        Cancel
      </Button>
      <Button click={checkoutContinue} green>
        Continue
      </Button>
    </div>
  );
};
