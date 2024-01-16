import { useEffect, useReducer } from "react";
import Cookie from "js-cookie";
import { CartContext, cartReducer } from ".";

const CART_INITIAL_STATE = {
  cart: Cookie.get("cart") ? JSON.parse(Cookie.get("cart")) : [],
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  // Efecto para leer la cookie
  useEffect(() => {
    const cookieProducts = Cookie.get("cart")
      ? JSON.parse(Cookie.get("cart"))
      : [];

    dispatch({
      type: "[Cart] - LoadCart from cookies",
      payload: cookieProducts,
    });
  }, []);

  useEffect(() => {
    Cookie.set("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  const onAddProductToCart = (product) => {
    const productInCard = state.cart.some(
      (item) => item._id === product._id && item.size === product.size
    );
    // Si el producto no esta en el carrito
    if (!productInCard) {
      return dispatch({
        type: "[Cart] - Update products in cart",
        payload: [...state.cart, product],
      });
    }

    // Si el producto esta en el carrito - Acumular
    const updatedProducts = state.cart.map((item) => {
      if (item._id === product._id && item.size === product.size) {
        return {
          ...item,
          quantity: item.quantity + product.quantity,
        };
      }
      return item;
    });
    dispatch({
      type: "[Cart] - Update products in cart",
      payload: updatedProducts,
    });
  };

  return (
    <CartContext.Provider
      value={{
        ...state, //Methods
        onAddProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
