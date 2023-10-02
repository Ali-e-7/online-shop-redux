import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import {CartDropDownContainer,EmptyMessage ,CartItems}from"./cart-dropdown.styles";
import Button from "../button/buttoncomponent";
import CartItem from "../cart-item/cart-item.component";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate('/checkout')
  };
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length > 0 ? (cartItems.map((item) => (
          <CartItem key={item.id} product={item} />
        ))): (<EmptyMessage>Your cart is empty.</EmptyMessage>)}
        {}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT </Button>
    </CartDropDownContainer>
  );
};
export default CartDropDown;
