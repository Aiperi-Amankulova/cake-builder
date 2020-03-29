import React from 'react';
import classes from './Chocolate.module.css';
import Cake from './Cake/Cake';

export default () => {
    return (
      <div className= { classes.Chocolate }> 
        <Cake/>
        <Cake type="chocolate-cream"/>
        <Cake/>
        <Cake type="fruit-cream"/>
        <Cake/>
        <Cake type="curd-cream"/>
        <Cake/>
        <Cake type="protein-cream"/> 
         <Cake/>
      </div>
    );
  }

