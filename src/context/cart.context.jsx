import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";
const addCardItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCardItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
  isOpenCart: false,
  setIsOpenCart: () => null,
  cartItems: [],
  addItemToCart: () => null,
  total: 0,
});
const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_OPEN_CART: "SET_IS_OPEN_CART",
};
const INITIAL_STATE = {
  isOpenCart: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};
const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_IS_OPEN_CART:
      return {
        ...state,
        isOpenCart: payload,
      };
    default:
      throw new Error(`unhandled type ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  // const [isOpenCart, setIsOpenCart] = useState(false);
  // const [cartItems, setCartItems] = useState([]);
  // const [cartTotal, setCartTotal] = useState(0);

  // useEffect(() => {
  //   const newCartTotal = cartItems.reduce(
  //     (total, cartItem) => total + cartItem.quantity * cartItem.price,
  //     0
  //   );
  //   setCartTotal(newCartTotal);
  // }, [cartItems]);

  const [{ cartItems, isOpenCart, cartCount, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);
  const updateCartItemsReducer = (newCartItems) => {
    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      })
    );
  };
  const setIsOpenCart = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_OPEN_CART, bool));
  };
  const addItemToCart = (productToAdd) => {
    const newCartItems = addCardItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };
  const removeItemToCart = (cartItemToRemove) => {
    const newCartItems = removeCardItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  };
  const clearItemToCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItemsReducer(newCartItems);
  };
  const value = {
    isOpenCart,
    setIsOpenCart,
    cartItems,
    addItemToCart,
    removeItemToCart,
    clearItemToCart,
    cartTotal,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
