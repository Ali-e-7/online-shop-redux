import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import {ShoppingIcon,CartIconContainer,ItemCount}from"./cart-icon.styles";
const CartIcon = () => {
    const {isOpenCart, setIsOpenCart,cartItems,cartCount} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsOpenCart(!isOpenCart);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount ? cartCount : 0}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
