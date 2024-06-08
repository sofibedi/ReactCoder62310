import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Image, Text, SimpleGrid, Heading, Flex, Button } from '@chakra-ui/react';

const ItemListContainer = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: 1,
              name: 'Product 1',
              description: 'This is a short description for Product 1',
              price: 100,
              image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Product+1',
              stock: 10,
              category: 'ropa', // Added category information
            },
            {
              id: 2,
              name: 'Product 2',
              description: 'This is a short description for Product 2',
              price: 150,
              image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Product+2',
              stock: 15,
              category: 'ropa', // Added category information
            },
            {
              id: 3,
              name: 'Product 3',
              description: 'This is a short description for Product 3',
              price: 200,
              image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Product+3',
              stock: 5,
              category: 'electronica', // Added category information
            },
            {
              id: 4,
              name: 'Product 4',
              description: 'This is a short description for Product 4',
              price: 250,
              image: 'https://via.placeholder.com/150/FFFF00/000000?text=Product+4',
              stock: 20,
              category: 'electronica', // Added category information
            },
            {
              id: 5,
              name: 'Product 5',
              description: 'This is a short description for Product 5',
              price: 300,
              image: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Product+5',
              stock: 8,
              category: 'libros', // Added category information
            },
            {
              id: 6,
              name: 'Product 6',
              description: 'This is a short description for Product 6',
              price: 350,
              image: 'https://via.placeholder.com/150/00FFFF/000000?text=Product+6',
              stock: 12,
              category: 'libros', // Added category information
            }
          ]);
        }, 1000);
      });

      // Filter products based on the category
      const filteredProducts = category ? response.filter(product => product.category === category) : response;
      setProducts(filteredProducts);
    };

    fetchProducts();
  }, [category]);

  return (
    <Box p={4}>
      <Heading as="h1" mb={4} textAlign="center">Product Catalog</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {products.map((product) => (
          <Box
            key={product.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.05)' }}
          >
            <Link to={`/product/${product.id}`}>
              <Image src={product.image} alt={product.name} boxSize="150px" objectFit="cover" m="auto" />
              <Box p="6">
                <Text fontWeight="bold" fontSize="xl">{product.name}</Text>
                <Text mt={2} noOfLines={2}>{product.description}</Text>
                <Text mt={2} color="teal.500">${product.price}</Text>
              </Box>
            </Link>
            <Flex justify="center" mb={4}>
              <Button colorScheme="teal" mt={2}>
                <Link to={`/product/${product.id}`}>View Details</Link>
              </Button>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ItemListContainer;
