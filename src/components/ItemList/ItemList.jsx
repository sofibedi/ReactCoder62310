import React from 'react';
import Item from '../Item/Item';
import { SimpleGrid } from '@chakra-ui/react';

const ItemList = ({ products }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
};

export default ItemList;
