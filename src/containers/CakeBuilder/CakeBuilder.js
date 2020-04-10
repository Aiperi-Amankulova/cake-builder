import React, { useState } from 'react'; 
import Chocolate from  '../../components/CakeBuilder/Сhocolate/Сhocolate';
import classes from './CakeBuilder.module.css';
import CakeControls from '../../components/CakeBuilder/CakeControls/CakeControls';

const PRICES ={
  chocolateCream: 50, 
  fruitCream: 50, 
  curdCream: 50, 
  proteinCream:50
}

export default () => {
const [ingredients, setIngredients] = useState({
  chocolateCream:0, 
  fruitCream: 0, 
  curdCream: 0, 
  proteinCream:0
});
const [price, setPrice] = useState(100);

function addIngredient(type){
 const newIngredients = {...ingredients};
 newIngredients[type]++;
 setIngredients(newIngredients);

 const newPrice = price + PRICES[type];
 setPrice(newPrice);
}

function removeIngredient(type){
if(ingredients[type] >= 1){
  const newIngredients = {...ingredients};
  newIngredients[type]--;
  setIngredients(newIngredients);
 }
 const newPrice = price - PRICES[type];
 setPrice(newPrice);
}


    return (
      <div className= { classes.CakeBuilder }> 
      <Chocolate price={price} ingredients={ingredients}/>
       <CakeControls
       addIngredient={addIngredient}
       removeIngredient={removeIngredient}/>
      </div>
    );
  }
 