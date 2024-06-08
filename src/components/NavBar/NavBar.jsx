import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Flex, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

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
      <Box as="div" fontSize="1.5rem" fontWeight="bold">
        LosSantos eCommerce
      </Box>
      <Flex as="ul" listStyleType="none" gap="1rem">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/ropa">Ropa</Link>
        </li>
        <li>
          <Link to="/electronica">Electrónica</Link>
        </li>
        <li>
          <Link to="/libros">Libros</Link>
        </li>
      </Flex>
      <CartWidget />
    </Flex>
  );
};

export default NavBar; // Asegúrate de exportar el componente por defecto
