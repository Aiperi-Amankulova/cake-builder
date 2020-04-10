import React from 'react';
import classes from './Chocolate.module.css';
import Cake from './Cake/Cake';

export default ({ ingredients,price }) => {
  let ingredientsOutput = [];

  const types = Object.keys(ingredients);
  types.forEach(type => {
    for (let i = 0; i < ingredients[type]; i++) {
      ingredientsOutput.push(<Cake key={type + i } type={type}/>)
    }
  });
 
    return (
      <div className= { classes.Chocolate }> 
       
       <div className={classes.bento}> 
         {ingredientsOutput}
         <Cake/>
         <Cake type="plate"/>

      </div>
      <div className={classes.price}> 
       Total price: {price}
      </div>
     </div>
    );
  }

