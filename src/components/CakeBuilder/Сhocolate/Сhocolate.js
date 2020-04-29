import React from "react";
import classes from "./Chocolate.module.css";
import Layer from "./Layer/Layer";

export default ({ ingredients, price }) => {
  let ingredientsOutput = [];

  const types = Object.keys(ingredients);
  types.forEach((type) => {
    for (let i = 0; i < ingredients[type]; i++) {
      ingredientsOutput.push(<Layer key={type + i} type={type} />);
    }
  });

  return (
    <div className={classes.Chocolate}>
      <div className={classes.bento}>
        {ingredientsOutput}
        <Layer type="plate" />
      </div>
      <div className={classes.price}>Total price: {price}</div>
    </div>
  );
};
