import React, { useState } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./CheckoutForm.module.css";

export default ({ checkoutFinish }) => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    address: "",
    delivery: "",
  });

  function nameChahge({ target }) {
    setData({ ...data, name: target.value });
  }
  function phoneChahge({ target }) {
    setData({ ...data, phone: target.value });
  }
  function addressChahge({ target }) {
    setData({ ...data, address: target.value });
  }
  function deliveryChahge({ target }) {
    setData({ ...data, delivery: target.value });
  }
  return (
    <div className={classes.CheckoutForm}>
      <input
        type="text"
        placeholder="Name"
        onChange={nameChahge}
        value={data.name}
        required
      />
      <input
        type="phone"
        placeholder="Phone"
        onChange={phoneChahge}
        value={data.phone}
        required
      />
      <input
        type="text"
        placeholder="Address"
        onChange={addressChahge}
        value={data.address}
        required
      />
      <select required>
        <option onChange={deliveryChahge} value="">
          - Delivery -
        </option>
        <option>Fastest</option>
        <option>Fast</option>
        <option>Regular</option>
      </select>

      <Button click={() => checkoutFinish(data)} green>
        Finish
      </Button>
    </div>
  );
};
