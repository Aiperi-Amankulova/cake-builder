import React from "react";
import classes from "./Logo.module.css";
import logo1 from "../../../assets/logo1.svg";

export default () => {
  return (
    <div className={classes.Logo}>
      <img src={logo1} alt="Cake builder logo" />
      <span>Cake Builder</span>
    </div>
  );
};
