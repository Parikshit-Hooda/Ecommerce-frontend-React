import { ActionTypes } from "../constants/action-types";

const intialState = {
  products: [
    {
      id: 1,
      title: "Test title",
      category: "Test category"
    }
  ]
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
