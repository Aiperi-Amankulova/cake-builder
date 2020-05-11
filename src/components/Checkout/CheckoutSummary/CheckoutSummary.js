import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";
import Cake from "../../CakeBuilder/Cake/Cake";

export default ({ ingredients, price }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <Cake ingredients={ingredients} price={price} />
      <Button red> Cancel</Button>
      <Button green>Continue</Button>
    </div>
  );
};