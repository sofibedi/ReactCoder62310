import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../context/CartContext';

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  return (
    <Link to="/cart">
      <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
      {getTotalItems() > 0 && <span>({getTotalItems()})</span>}
    </Link>
  );
};

export default CartWidget;
