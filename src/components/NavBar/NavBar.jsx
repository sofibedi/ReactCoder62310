import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Button, HStack } from '@chakra-ui/react';
import CartWidget from '../CartWidget/CartWidget'; 

const NavBar = () => {
  return (
    <Box bg="teal.500" p={4} color="white">
      <Flex justify="space-between" align="center">
        <HStack spacing={4}>
          <Button as={Link} to="/">Home</Button>
          <Button as={Link} to="/category/ropa">Ropa</Button>
          <Button as={Link} to="/category/electronica">Electrónica</Button>
          <Button as={Link} to="/category/libros">Libros</Button>
        </HStack>
        <CartWidget />
      </Flex>
    </Box>
  );
};

export default NavBar;