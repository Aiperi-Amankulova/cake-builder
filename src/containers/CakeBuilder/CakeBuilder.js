import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../axios";
import CakeControls from "../../components/CakeBuilder/CakeControls/CakeControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/CakeBuilder/OrderSummary/OrderSummary";
import Cake from "../../components/CakeBuilder/Cake/Cake";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import classes from "./CakeBuilder.module.css";
import { useSelector } from "react-redux";

export default withErrorHandler(() => {
  const { ingredients, price, canOrder } = useSelector((state) => state);

  const [isOrdering, setIsOrdering] = useState(false);
  const history = useHistory();

  const canOrder = Object.keys(ingredients).reduce((canOrder, ingredient) => {
    return !canOrder ? number > 0 : canOrder;
  }, false);

  function checkCanOrder(ingredients) {
    const total = 0;
    return total > 0;
  }
  function startOrder() {
    setIsOrdering(true);
  }
  function cancelOrder() {
    setIsOrdering(false);
  }
  function finishOrder() {
    const queryParams = Object.keys(ingredients).map(
      (ingredient) =>
        encodeURIComponent(ingredient) +
        "=" +
        encodeURIComponent(ingredients[ingredient])
    );
    queryParams.push("price=" + encodeURIComponent(price.toFixed(2)));

    history.push({
      pathname: "/checkout",
      search: queryParams.join("&"),
    });
  }

  // useEffect(() => {
  //   axios
  //     .get("/ingredients.json")
  //     .then((response) => setIngredients(response.data))
  //     .catch((error) => {});
  // }, []);

  let output = <Spinner />;
  if (ingredients) {
    output = (
      <>
        <Cake price={price} ingredients={ingredients} />
        <CakeControls
          startOrder={startOrder}
          canOrder={canOrder}
          ingredients={ingredients}
        />
      </>
    );
  }

  let orderSummary = <Spinner />;
  if (isOrdering) {
    orderSummary = (
      <OrderSummary
        price={price}
        cancelOrder={cancelOrder}
        ingredients={ingredients}
      />
    );
  }
  return (
    <div className={classes.CakeBuilder}>
      <h1>Cake Builder</h1>
      {output}
      <Modal show={isOrdering} hideCallback={cancelOrder}>
        {orderSummary}
      </Modal>
    </div>
  );
}, axios);
