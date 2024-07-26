import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../context/CartContext';
import { Box, Image, Text, Stack, Button, HStack, AspectRatio, Center } from '@chakra-ui/react';

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (count) => {
    setQuantity(count);
    addItem(product, count);
  };

  return (
    <Center>
      <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
        <AspectRatio ratio={1}>
          <Image src={product.image} alt={product.title} objectFit="cover" />
        </AspectRatio>
        <Stack spacing={3} mt={4}>
          <Text fontSize="2xl" fontWeight="bold">{product.title}</Text>
          <Text>${product.price}</Text>
          <Text>{product.description}</Text>
          <ItemCount stock={product.stock} initial={1} onAdd={handleOnAdd} product={product} />
          </Stack>
      </Box>
    </Center>
  );
};

export default ItemDetail;
