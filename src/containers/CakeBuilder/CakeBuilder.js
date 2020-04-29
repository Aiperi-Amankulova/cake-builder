import React, { useState } from "react";
import classes from "./CakeBuilder.module.css";
import CakeControls from "../../components/CakeBuilder/CakeControls/CakeControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/CakeBuilder/OrderSummary/OrderSummary";
import Cake from "../../components/CakeBuilder/Cake/Cake";

const PRICES = {
  chocolateCream: 40,
  strawberryCream: 45,
  curdCream: 45,
  proteinCream: 50,
  bananaCream: 50,
  vanillaCream: 55,
};

export default () => {
  const [ingredients, setIngredients] = useState({
    chocolateCream: 0,
    strawberryCream: 0,
    curdCream: 0,
    proteinCream: 0,
    bananaCream: 0,
    vanillaCream: 0,
  });
  const [price, setPrice] = useState(100);
  const [canOrder, setCanOrder] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);

  function checkCanOrder(ingredients) {
    const total = Object.keys(ingredients).reduce((total, ingredient) => {
      return total + ingredients[ingredient];
    }, 0);
    setCanOrder(total > 0);
  }
  function startOrder() {
    setIsOrdering(true);
  }
  function cancelOrder() {
    setIsOrdering(false);
  }
  function finishOrder() {
    alert("You are on the checkout page!");
  }
  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setIngredients(newIngredients);
    checkCanOrder(newIngredients);

    const newPrice = price + PRICES[type];
    setPrice(newPrice);
  }
  function removeIngredient(type) {
    if (ingredients[type] >= 1) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;
      setIngredients(newIngredients);
      checkCanOrder(newIngredients);

      const newPrice = price - PRICES[type];
      setPrice(newPrice);
    }
  }

  return (
    <div className={classes.CakeBuilder}>
      <Cake price={price} ingredients={ingredients} />
      <CakeControls
        startOrder={startOrder}
        canOrder={canOrder}
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
      <Modal show={isOrdering} hideCallback={cancelOrder}>
        <OrderSummary
          price={price}
          finishOrder={finishOrder}
          cancelOrder={cancelOrder}
          ingredients={ingredients}
        />
      </Modal>
    </div>
  );
};
