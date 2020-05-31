import * as types from "../actions/types";

const initialState = {
  ingredients: {
    candle: { quantity: 1, price: 20, label: "Candle" },
    chocolateCream: { quantity: 1, price: 70, label: "Chocolate Cream" },
    strawberryCream: { quantity: 1, price: 45, label: "Strawberry Cream" },
    blueberryСream: { quantity: 1, price: 47, label: "Blueberry Cream" },
    proteinCream: { quantity: 1, price: 50, label: "Protein Cream" },
    bananaCream: { quantity: 1, price: 50, label: "Banana Cream" },
    vanillaCream: { quantity: 1, price: 55, label: "Vanilla Cream" },
  },
  price: 400,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: {
            ...state.ingredients[action.ingredient],
            quantity: state.ingredients[action.ingredient].quantity + 1,
          },
        },
        price: state.price + state.ingredients[action.ingredient].price,
      };
    case types.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: {
            ...state.ingredients[action.ingredient],
            quantity: state.ingredients[action.ingredient].quantity - 1,
          },
        },
        price: state.price - state.ingredients[action.ingredient].price,
      };

    default:
      return state;
  }
};
