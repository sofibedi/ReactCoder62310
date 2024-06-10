import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Text, Heading, Flex, Button } from '@chakra-ui/react';
import ItemCount from '../ItemCount/ItemCount'; 
import { useProducts } from '../ProductsContext/ProductsContext';

const ItemDetailContainer = () => {
  const { id } = useParams();  
  const [product, setProduct] = useState(null);
  const products = useProducts();

  useEffect(() => {
    const selectedProduct = products.find(p => p.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id, products]);

  if (!product) {
    return <div>Loading...</div>; 
  }

  return (
    <Box p={4}>
      <Flex direction={['column', 'row']} align="center" justify="center">
        <Image src={product.image} alt={product.name} boxSize="300px" objectFit="cover" m="auto" />
        <Box p="6">
          <Heading as="h1">{product.name}</Heading>
          <Text mt={2}>{product.description}</Text>
          <Text mt={2} fontSize="2xl" color="teal.500">${product.price}</Text>
          <ItemCount product={product} stock={product.stock} initial={1} /> 
        </Box>
      </Flex>
    </Box>
  );
};

export default ItemDetailContainer;