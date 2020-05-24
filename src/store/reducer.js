import * as actions from "./actions";

const initialState = {
  ingredients: {
    chocolateCream: 1,
    strawberryCream: 1,
    blueberryСream: 2,
    proteinCream: 1,
    bananaCream: 1,
    vanillaCream: 1,
  },
  price: 400,
};
const PRICES = {
  chocolateCream: 70,
  strawberryCream: 45,
  blueberryСream: 47,
  proteinCream: 50,
  bananaCream: 50,
  vanillaCream: 55,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] + 1,
        },
        price: state.price + PRICES[action.ingredient],
      };

    case actions.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] - 1,
        },
        price: state.price - PRICES[action.ingredient],
      };

    default:
      return state;
  }
};
