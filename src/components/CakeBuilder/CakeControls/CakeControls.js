import React  from 'react'; 
import classes from './CakeControls.module.css';
import CakeControl from './CakeControl/CakeControl';

 const CONTROLS = [
        {label: "Chocolate Cream", type: "chocolateCream"}, 
        {label: "Strawberry Cream", type: "strawberryCream"},
        {label: "Curd Cream", type: "curdCream"},
        {label: "Protein Cream", type: "proteinCream"},
        {label: "Banana  Cream", type: "bananaCream"},
        {label: "Vanilla Cream", type: "vanillaCream"}
    ]
export default ( {addIngredient,removeIngredient, ingredients, canOrder} ) => {
   
 
    const controlsOutput = CONTROLS.map((control) => ( 
    <CakeControl 
         key={control.type}
         control={control}
         addIngredient={addIngredient}
         removeIngredient={removeIngredient}
         disabled={ingredients[control.type] === 0}
         />
         ))

    return (
      <div className= { classes.CakeControls }> 
        {controlsOutput}
        <button 
        disabled={!canOrder}
        className={classes.orderButton}>Order</button>
      </div>
    );
  }
 