import React  from 'react'; 
import classes from './CakeControls.module.css';
import CakeControl from './CakeControl/CakeControl';

export default ( {addIngredient,removeIngredient} ) => {
    const controls = [
        {label: "Chocolate Cream", type: "chocolateCream"}, 
        {label: "Fruit Cream", type: "fruitCream"},
        {label: "Curd Cream", type: "curdCream"},
        {label: "Protein Cream", type: "proteinCream"}
    ]
 
    const controlsOutput = controls.map(control => 
        <CakeControl 
         control={control}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}/>)

    return (
      <div className= { classes.CakeControls }> 
        {controlsOutput}
      </div>
    );
  }
 