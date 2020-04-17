import React from 'react';
import classes from './OrderSummary.module.css'

const LABELS = {
    chocolateCream: "Chocolate Cream", 
    strawberryCream: "Strawberry Cream",
    curdCream : "Curd Cream",
    proteinCream : "Protein Cream",
    bananaCream : "Banana  Cream" ,
    vanillaCream : "Vanilla Cream" 
}
export default({ ingredients }) =>  {
    const ingredientsOutput = Object.keys(ingredients)
    .filter((ingredient) => ingredients[ingredient] > 0)
    .map((ingredient) => (
      <li>
        {LABELS[ingredient]}: {ingredients[ingredient]}
      </li>
    ));
     return(
    <div className={classes.OrderSummary}>
        <h2>Your Order</h2>
        <p>Congratulations! You've built a best cake of all times!</p>
        <ul>
             {ingredientsOutput }
        </ul>
    </div>
     )
}
     
