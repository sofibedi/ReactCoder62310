import React, { useState } from 'react';
import { Box, Button, Input, Flex } from '@chakra-ui/react';
import { useCart } from '../Cart/Cart'; 

const ItemCount = ({ product, stock, initial = 1 }) => {
  const [quantity, setQuantity] = useState(initial);
  const { addToCart } = useCart();

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAdd = () => {
    addToCart(product, quantity);
  };

  return (
    <Flex direction="column" alignItems="center" mt={4}>
      <Flex alignItems="center" mb={4}>
        <Button size="sm" onClick={handleDecrement} disabled={quantity <= 1}>
          -
        </Button>
        <Input
          size="sm"
          width="3rem"
          textAlign="center"
          mx={2}
          value={quantity}
          readOnly
        />
        <Button size="sm" onClick={handleIncrement} disabled={quantity >= stock}>
          +
        </Button>
      </Flex>
      <Button colorScheme="teal" onClick={handleAdd} disabled={stock === 0}>
        Agregar al Carrito
      </Button>
    </Flex>
  );
};

export default ItemCount;