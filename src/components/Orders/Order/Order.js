import React from "react";
import classes from "./Order.module.css";

const CONTROLS = {
  chocolateCream: "Chocolate Cream",
  strawberryCream: "Strawberry Cream",
  blueberryСream: "Blueberry Cream",
  proteinCream: "Protein Cream",
  bananaCream: "Banana  Cream",
  vanillaCream: "Vanilla Cream",
};

export default ({ price, ingredients, details }) => {
  let ingredientsOutput = null;
  if (ingredients) {
    ingredientsOutput = Object.keys(ingredients).map((key) => (
      <span key={key} className={classes.ingredient}>
        {CONTROLS[key]} ({ingredients[key]})
      </span>
    ));
  }

  const detailsOutput = (
    <div className={classes.details}>
      {details
        ? details.name + ", " + details.phone + ", " + details.address
        : "No details available"}
    </div>
  );

  return (
    <div className={classes.Order}>
      {detailsOutput}
      <div className={classes.price}>{price.toFixed(2)} som</div>
      <div className={classes.ingredients}>{ingredientsOutput}</div>
    </div>
  );
};
