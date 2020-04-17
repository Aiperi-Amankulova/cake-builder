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
export default({ ingridients }) =>  {
    const ingridientsOutput = Object.keys(ingridients).map(ingridient =>  ( 
        <li>{LABELS[ingridient]}</li>
        ));
     return(
    <div className={classes.OrderSummary}>
        <h2>Your order</h2>
        <p>Congratulations! You've built a best cake of all times!</p>
        <ul>
             {ingridientsOutput}
        </ul>
    </div>
     )
}
     
