import React from "react";
import classes from "./CakeControls.module.css";
import CakeControl from "./CakeControl/CakeControl";
import Button from "../../UI/Button/Button";

const CONTROLS = [
  { label: "Chocolate Cream", type: "chocolateCream" },
  { label: "Strawberry Cream", type: "strawberryCream" },
  { label: "Blueberry Cream", type: "blueberryСream" },
  { label: "Protein Cream", type: "proteinCream" },
  { label: "Banana  Cream", type: "bananaCream" },
  { label: "Vanilla Cream", type: "vanillaCream" },
];
export default ({
  addIngredient,
  removeIngredient,
  ingredients,
  canOrder,
  startOrder,
}) => {
  const controlsOutput = CONTROLS.map((control) => (
    <CakeControl
      key={control.type}
      control={control}
      addIngredient={addIngredient}
      removeIngredient={removeIngredient}
      disabled={ingredients[control.type] === 0}
    />
  ));

  return (
    <div className={classes.CakeControls}>
      {controlsOutput}
      <Button click={startOrder} enabled={canOrder}>
        Order
      </Button>
    </div>
  );
};
