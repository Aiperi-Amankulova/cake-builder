import React from "react";
import classes from "./Layer.module.css";

export default ({ type }) => {
  const layerClasses = [classes.Layer, classes[type]];
  return <div className={layerClasses.join(" ")}></div>;
};
