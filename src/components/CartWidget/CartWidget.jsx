import React from 'react';

const CartWidget = () => {
  return (
    <div style={styles.cartWidget}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        style={styles.cartIcon}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2 9m-3 0h18m-2-9l-2 9m-6-6h6" />
      </svg>
    </div>
  );
};

const styles = {
  cartWidget: {
    cursor: 'pointer'
  },
  cartIcon: {
    width: '2rem',
    height: '2rem'
  }
};

export default CartWidget;
