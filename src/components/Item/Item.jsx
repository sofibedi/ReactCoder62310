import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Image, Text, Stack, Button, HStack, AspectRatio } from '@chakra-ui/react';

const Item = ({ product }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <AspectRatio ratio={1}>
        <Image src={product.image} alt={product.title} objectFit="cover" objectPosition="center" />
      </AspectRatio>

      <Box p="6">
        <Stack spacing={0} align="center">
          <Text fontWeight="bold" fontSize="xl">
            {product.title}
          </Text>
          <Text color="gray.500">${product.price}</Text>
        </Stack>

        <HStack mt="4" justifyContent="center">
          <Link to={`/item/${product.id}`}>
            <Button colorScheme="teal" size="sm">
              Ver detalle
            </Button>
          </Link>
        </HStack>
      </Box>
    </Box>
  );
};

export default Item;
