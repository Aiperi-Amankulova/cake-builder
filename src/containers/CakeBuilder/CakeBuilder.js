import React, { useState } from 'react'; 
import Chocolate from  '../../components/CakeBuilder/Сhocolate/Сhocolate';
import classes from './CakeBuilder.module.css';
import CakeControls from '../../components/CakeBuilder/CakeControls/CakeControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/CakeBuilder/OrderSummary/OrderSummary';

const PRICES ={
  chocolateCream: 40, 
  strawberryCream: 45,
  curdCream:45,
  proteinCream:50,
  bananaCream:50,
  vanillaCream:55
}

export default () => {
const [ingredients, setIngredients] = useState({
  chocolateCream: 0, 
  strawberryCream: 0,
  curdCream:0,
  proteinCream:0,
  bananaCream:0,
  vanillaCream:0

});
const [price, setPrice] = useState(100);
const [canOrder, setCanOrder] = useState(false);
const [isOrder, setIsOrder] = useState(false);

function checkCanOrder(ingredients) {
   const total = Object.keys(ingredients).reduce((total, ingredient) => {
     return total + ingredients[ingredient]
   }, 0);
   setCanOrder(total > 0)
}
function addIngredient(type){
 const newIngredients = {...ingredients};
 newIngredients[type]++;
 setIngredients(newIngredients);
 checkCanOrder(newIngredients);

 const newPrice = price + PRICES[type];
 setPrice(newPrice);
}
function removeIngredient(type){
if(ingredients[type] >= 1){
  const newIngredients = {...ingredients};
  newIngredients[type]--;
  setIngredients(newIngredients);
  checkCanOrder(newIngredients);

 const newPrice = price - PRICES[type];
 setPrice(newPrice);
 }
}
 
return (
      <div className= { classes.CakeBuilder }> 
      <Chocolate price={price} ingredients={ingredients}/>
       <CakeControls
       canOrder={canOrder}
       ingredients={ingredients}
       addIngredient={addIngredient}
       removeIngredient={removeIngredient}/>
        <Modal>
          <OrderSummary
          ingredients={ingredients}/>
        </Modal>
      </div>
    );
  }
 