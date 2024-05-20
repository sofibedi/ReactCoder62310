import React from 'react';
import { Flex, Box, Center } from '@chakra-ui/react'; 

const ItemListContainer = ({ title }) => {
  return (
    <Flex direction="column" alignItems="center" padding="2rem" backgroundColor="white"> {}
      <Box color="#FF3366" fontSize="2xl">{title}</Box>
      <Center>
        <Box>¡Bienvenidos a nuestra tienda!</Box>
      </Center>
      <Center>
        <Box>Navega por nuestro catálogo para descubrir productos increíbles.</Box>
      </Center>
    </Flex>
  );
};

export default ItemListContainer;
