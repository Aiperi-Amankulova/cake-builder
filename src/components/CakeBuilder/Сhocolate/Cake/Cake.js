import React from 'react';
import classes from './Cake.module.css';

export default ({ type }) => {
     const cakeClasses = [classes.Cake]

    switch(type){ 
     case 'chocolate-cream':
         cakeClasses.push(classes.chocolateCream);
         break;

     case 'fruit-cream':
        cakeClasses.push(classes.fruitCream);
         break;

     case 'curd-cream':
        cakeClasses.push(classes.curdCream);
         break; 

     case 'protein-cream':
        cakeClasses.push(classes.proteinCream); 
         break;   
    }
    return (
      <div className= {cakeClasses.join(" ")}>   

      </div>
    );
  }

