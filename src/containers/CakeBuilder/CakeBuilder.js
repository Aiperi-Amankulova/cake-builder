import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../axios";
import CakeControls from "../../components/CakeBuilder/CakeControls/CakeControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/CakeBuilder/OrderSummary/OrderSummary";
import Cake from "../../components/CakeBuilder/Cake/Cake";
import Spinner from "../../components/UI/Spinner/Spinner";
import withAxios from "../../hoc/withAxios/withAxios";
import classes from "./CakeBuilder.module.css";
import { useSelector, useDispatch } from "react-redux";
import { load } from "../../store/actions/builder";

export default withAxios(({ loading }) => {
  const { ingredients, price } = useSelector((state) => state.builder);
  const [isOrdering, setIsOrdering] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    load(dispatch);
  }, [dispatch]);

  let output = <Spinner />;
  if (ingredients) {
    const canOrder = Object.values(ingredients).reduce(
      (canOrder, ingredients) => {
        return !canOrder ? ingredients.quantity > 0 : canOrder;
      },
      false
    );

    output = (
      <>
        <Cake price={price} ingredients={ingredients} />
        <CakeControls
          startOrder={() => setIsOrdering(true)}
          canOrder={canOrder}
          ingredients={ingredients}
        />
        <Modal show={isOrdering} hideCallback={() => setIsOrdering(false)}>
          <OrderSummary
            ingredients={ingredients}
            finishOrder={() => history.push("/checkout")}
            cancelOrder={() => setIsOrdering(false)}
            price={price}
          />
        </Modal>
      </>
    );
  }

  return (
    <div className={classes.CakeBuilder}>
      <h1>Cake builder</h1>
      {output}
    </div>
  );
}, axios);
