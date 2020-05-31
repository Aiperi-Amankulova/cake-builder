import React from "react";
import classes from "./Order.module.css";

export default ({ price, ingredients, details }) => {
  let ingredientsOutput = null;

  if (ingredients) {
    ingredientsOutput = Object.keys(ingredients)
      .filter((ingredient) => ingredients[ingredient].quantity > 0)
      .map((ingredient) => (
        <span key={ingredient} className={classes.ingredient}>
          {ingredients[ingredient].label} ({ingredients[ingredient].quantity})
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
      <div className={classes.price}>{price} som</div>
      <div className={classes.ingredients}>{ingredientsOutput}</div>
    </div>
  );
};
