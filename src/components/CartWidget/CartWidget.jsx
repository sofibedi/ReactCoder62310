import React from 'react';
import { Box, Badge, Link } from '@chakra-ui/react';
import { useCart } from '../Cart/Cart';

const CartWidget = () => {
  const { getTotalItems } = useCart();

  return (
    <Link to="/cart"> 
      <Box cursor="pointer" color="#FF0000" position="relative">
        <Badge colorScheme="red" borderRadius="full" px="2" fontSize="0.8em" position="absolute" top="-0.5rem" right="-0.5rem">
          {getTotalItems()}
        </Badge>
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
    </Link>
  );
};

export default CartWidget;
