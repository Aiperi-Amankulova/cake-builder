import React from 'react';
import classes from './Cake.module.css';

export default ({ type }) => {
     const cakeClasses = [classes.Cake]

    switch(type){ 
     case 'chocolateCream':
         cakeClasses.push(classes.chocolateCream);
         break;

     case 'fruitCream':
        cakeClasses.push(classes.fruitCream);
         break;

     case 'curdCream':
        cakeClasses.push(classes.curdCream);
         break; 

     case 'proteinCream':
        cakeClasses.push(classes.proteinCream); 
         break;   
    
    case 'plate':
        cakeClasses.push(classes.plate);
         break;
    }
    return (
      <div className= {cakeClasses.join(" ")}>   

      </div>
    );
  }

