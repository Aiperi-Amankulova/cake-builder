import React from "react";
import classes from "./Drawer.module.css";
import Logo from "../../UI/Logo/Logo";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Nav from "../../UI/Nav/Nav";

export default ({ toggleDrawer, open }) => {
  const contentClasses = [classes.content];
  contentClasses.push(open ? classes.Open : classes.Closed);
  return (
    <div className={classes.Drawer}>
      <Backdrop hideCallback={toggleDrawer} show={open} />
      <div className={contentClasses.join(" ")}>
        <Logo />
        <Nav />
      </div>
    </div>
  );
};
