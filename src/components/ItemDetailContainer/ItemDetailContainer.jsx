// src/components/ItemDetailContainer/ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { Box, Image, Text, Heading, Flex, Button } from '@chakra-ui/react';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [addedQuantity, setAddedQuantity] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            id: id,
            name: `Product ${id}`,
            description: `Detailed description of Product ${id}`,
            price: 100 + parseInt(id) * 50,
            image: `https://via.placeholder.com/300/${id}0${id}0FF/FFFFFF?text=Product+${id}`,
            stock: 10 + parseInt(id) * 5
          });
        }, 1000);
      });
      setProduct(response);
    };

    fetchProduct();
  }, [id]);

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
