import Button from '../button/button.component';
import { useContext } from 'react';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';
import './cart-dropdown.styles.scss';


const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const nav = useNavigate();
  const goToCheckoutHandler = () => {
    nav('/checkout');
  };
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map(item => (<CartItem key={item.id} cartItem={item} />))}
      </div>
      <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
    </div>
  )
}

export default CartDropdown;