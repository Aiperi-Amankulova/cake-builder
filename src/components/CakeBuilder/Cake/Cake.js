import React from "react";
import Layer from "./Layer/Layer";
import classes from "./Cake.module.css";

export default ({ price, ingredients }) => {
  let ingredientsOutput = [];

  Object.keys(ingredients).forEach((ingredient) => {
    for (let i = 0; i < ingredients[ingredient].quantity; i++) {
      ingredientsOutput.push(<Layer key={ingredient + i} type={ingredient} />);
    }
  });

  return (
    <div className={classes.Cake}>
      <div className={classes.plate}>
        {ingredientsOutput}
        <Layer type="plate" />
      </div>
      <div className={classes.price}>Total price: {price} som</div>
    </div>
  );
};
