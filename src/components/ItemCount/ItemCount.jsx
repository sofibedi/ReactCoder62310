import React, { useState, useContext, useEffect } from 'react';
import CartContext from '../../context/CartContext';
import { Button, ButtonGroup, Input, useToast } from '@chakra-ui/react';

const ItemCount = ({ stock, initial = 1, onAdd, product }) => { 
  const [count, setCount] = useState(initial);
  const { addItem, isInCart, cart } = useContext(CartContext);
  const toast = useToast();

  const [totalQuantity, setTotalQuantity] = useState(initial); 

  useEffect(() => {
    const existingItem = cart.find((item) => item.id === product.id);
    const newTotalQuantity = existingItem ? existingItem.quantity + count : count;
    setTotalQuantity(newTotalQuantity);
  }, [cart, count, product.id]);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    if (totalQuantity > stock) { 
      toast({
        title: 'Sin stock',
        description: `No hay suficiente stock de ${product.title}`,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    onAdd(count);
    addItem(product, count); 
  };

  return (
    <ButtonGroup size="sm" isAttached variant="outline">
      <Button onClick={decrement} disabled={count === 1}>-</Button>
      <Input type="number" value={count} readOnly textAlign="center" width="40px" mx={1} />
      <Button onClick={increment} disabled={count === stock}>+</Button>
      <Button 
        onClick={handleAdd} 
        colorScheme="teal" 
        disabled={count === 0 || totalQuantity > stock} 
      >
        Agregar al carrito
      </Button>
    </ButtonGroup>
  );
};

export default ItemCount;
