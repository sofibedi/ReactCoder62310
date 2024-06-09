import React from 'react';
import { Flex, Box, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem 2rem"
      backgroundColor="#2C5282" // Cambiado a un color azul oscuro
      color="white"
      boxShadow="md" // Añadir sombra para separar del contenido
    >
      <Box as={Link} to="/" fontSize="1.5rem" fontWeight="bold" color="white">
        LosSantos eCommerce
      </Box>
      <Flex as="ul" listStyleType="none" gap="1rem" alignItems="center">
        <li>
          <ChakraLink as={Link} to="/" _hover={{ color: "teal.200" }} fontWeight="bold">
            Inicio
          </ChakraLink>
        </li>
        <li>
          <ChakraLink as={Link} to="/ropa" _hover={{ color: "teal.200" }} fontWeight="bold">
            Ropa
          </ChakraLink>
        </li>
        <li>
          <ChakraLink as={Link} to="/electronica" _hover={{ color: "teal.200" }} fontWeight="bold">
            Electrónica
          </ChakraLink>
        </li>
        <li>
          <ChakraLink as={Link} to="/libros" _hover={{ color: "teal.200" }} fontWeight="bold">
            Libros
          </ChakraLink>
        </li>
      </Flex>
      <CartWidget />
    </Flex>
  );
};

export default NavBar;
