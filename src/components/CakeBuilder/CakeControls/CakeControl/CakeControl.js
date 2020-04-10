import React  from 'react'; 
import classes from './CakeControl.module.css';

export default ({ control, addIngredient, removeIngredient}) => {
 
    return (
      <div className= { classes.CakeControl }> 
       <button 
       className={classes.less} 
       onClick={()=> removeIngredient(control.type)}>
          -
       </button>
       <span className={classes.label}>{control.label}</span>
       <button 
       className={classes.more} 
       onClick={()=> addIngredient(control.type)}>
          +
      </button>
      </div>
    );
  }
 