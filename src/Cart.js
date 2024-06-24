import { Button } from 'react-bootstrap';
import React, { useContext } from 'react';
import './Cart.css';
import CartContext from './CartContext';

function Cart(props) {
  const ctx = useContext(CartContext)


  return (
    <div className='cart justify-content-end'>
      <Button onClick={ props.onShow } className='bg-secondary'>
        Cart
      </Button>
      <sup className='sup'>{ctx.Qty}</sup>
    </div>
  );
}

export default Cart;
