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
  const { ingredients, price } = useSelector((state) => state);

  const [isOrdering, setIsOrdering] = useState(false);
  const history = useHistory();

  const canOrder = Object.values(ingredients).reduce(
    (canOrder, ingredients) => {
      return !canOrder ? ingredients.quantity > 0 : canOrder;
    },
    false
  );

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
          startOrder={() => setIsOrdering(true)}
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
        ingredients={ingredients}
        finishOrder={() => history.push("/checkout")}
        cancelOrder={() => setIsOrdering(false)}
        price={price}
      />
    );
  }

  return (
    <div className={classes.CakeBuilder}>
      <h1>Cake Builder</h1>
      {output}
      <Modal show={isOrdering} hideCallback={() => setIsOrdering(false)}>
        {orderSummary}
      </Modal>
    </div>
  );
}, axios);
