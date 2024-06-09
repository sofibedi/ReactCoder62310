// ItemListContainer.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Text, SimpleGrid, Heading, Flex, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useProducts } from '../ProductsContext/ProductsContext'; // Usa el hook del contexto

const ItemListContainer = () => {
  const { category } = useParams();
  const products = useProducts(); // Obtiene productos del contexto

  // Filtrar productos según la categoría
  const filteredProducts = category ? products.filter(product => product.category === category) : products;

  return (
    <Box p={4}>
      <Heading as="h1" mb={4} textAlign="center">Catálogo de Productos</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {filteredProducts.map((product) => (
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
                <Link to={`/product/${product.id}`}>Ver Detalles</Link>
              </Button>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ItemListContainer;
