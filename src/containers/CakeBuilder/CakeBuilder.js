import React, { Children } from 'react'; 
import Chocolate from  '../../components/CakeBuilder/Сhocolate/Сhocolate';
import classes from './CakeBuilder.module.css';

export default () => {
    return (
      <div className= { classes.CakeBuilder }> 
      <Chocolate />
      CakeControls
      </div>
    );
  }

