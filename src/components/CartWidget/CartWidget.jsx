import React from 'react';
import { Box } from '@chakra-ui/react'; 

const CartWidget = () => {
  return (
    <Box cursor="pointer" color="#FF0000"> {}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width="2rem"
        height="2rem"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2 9m-3 0h18m-2-9l-2 9m-6-6h6" />
      </svg>
    </Box>
  );
};

export default CartWidget;