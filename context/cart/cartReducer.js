export const cartReducer = (state, action) => {
  switch (action.type) {
    case "[Cart] - LoadCart from cookies":
      return {
        ...state,
        cart: action.payload,
      };
    case "[Cart] - Update products in cart":
      return {
        ...state,
        cart: [...action.payload],
      };

    default:
      return state;
  }
};
