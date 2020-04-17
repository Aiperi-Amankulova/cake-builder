import React from 'react';
import classes from './Modal.module.css';

export default ({ children }) => {
    return (
      <div className={classes.Modal}>
      {children}
      Hello
      </div>
    );
  }