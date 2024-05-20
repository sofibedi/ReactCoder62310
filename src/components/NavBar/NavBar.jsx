import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Flex, Box, Link } from '@chakra-ui/react'; 

const NavBar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between" 
      padding="1rem"
      backgroundColor="#FED7E2"
      color="white"
    >
      <Box as="div" fontSize="1.5rem" fontWeight="bold">LosSantos eCommerce</Box>
      <Flex as="ul" listStyleType="none" gap="1rem">
        <li><Link href="#home">Inicio</Link></li>
        <li><Link href="#products">Productos</Link></li>
        <li><Link href="#about">Nosotros</Link></li>
        <li><Link href="#contact">Contacto</Link></li>
      </Flex>
      <CartWidget />
    </Flex>
  );
};

export default NavBar;
