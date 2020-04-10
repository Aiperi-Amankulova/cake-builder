import React, { useState } from 'react'; 
import Chocolate from  '../../components/CakeBuilder/Сhocolate/Сhocolate';
import classes from './CakeBuilder.module.css';
import CakeControls from '../../components/CakeBuilder/CakeControls/CakeControls';

export default () => {
const [ingredients, setIngredients] = useState({
  chocolateCream:1,
  cake:1,
  fruitCream: 1, 
  curdCream: 1, 
  proteinCream:1

})
    return (
      <div className= { classes.CakeBuilder }> 
      <Chocolate ingredients={ingredients}/>
       <CakeControls/>
      </div>
    );
  }
 