// ItemDetailContainer.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Text, Heading, Flex, Button } from '@chakra-ui/react';
import ItemCount from '../ItemCount/ItemCount';
import { useProducts } from '../ProductsContext/ProductsContext'; // Usa el hook del contexto

const ItemDetailContainer = () => {
  const { id } = useParams();
  const products = useProducts(); // Obtiene productos del contexto
  const [product, setProduct] = useState(null);
  const [addedQuantity, setAddedQuantity] = useState(0);

  useEffect(() => {
    if (products.length > 0) {
      const selectedProduct = products.find((product) => product.id === parseInt(id));
      setProduct(selectedProduct);
    }
  }, [id, products]);

  const handleAddToCart = (quantity) => {
    setAddedQuantity(quantity);
    console.log(`Added ${quantity} of Product ${id} to cart`);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <Box p={4}>
      <Flex direction={['column', 'row']} align="center" justify="center">
        <Image src={product.image} alt={product.name} boxSize="300px" objectFit="cover" m="auto" />
        <Box p="6">
          <Heading as="h1">{product.name}</Heading>
          <Text mt={2}>{product.description}</Text>
          <Text mt={2} fontSize="2xl" color="teal.500">${product.price}</Text>
          <Text mt={2}>Stock: {product.stock}</Text>
          <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} />
          {addedQuantity > 0 && (
            <Text mt={2} color="green.500">
              You have added {addedQuantity} of this product to your cart.
            </Text>
          )}
          <Button colorScheme="teal" mt={4} onClick={() => console.log('Go to cart')}>
            Go to Cart
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default ItemDetailContainer;