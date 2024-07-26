import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Image,
  List,
  ListItem,
  IconButton,
  Center,
  Flex,
  useToast,
  Icon,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { BsCartX } from 'react-icons/bs'; // Ícono de carrito vacío
import CartContext from '../../context/CartContext';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebaseConfig';


const Cart = () => {
  const { cart, removeItem, clearCart, getTotalPrice } = useContext(CartContext);
  const toast = useToast();
  const navigate = useNavigate(); 
  const [isBuying, setIsBuying] = useState(false);

  const handleBuy = async () => {
    setIsBuying(true);

    try {
      // Simulación de la compra
      await new Promise((resolve) => setTimeout(resolve, 1000)); 

      toast({
        title: '¡Gracias por tu compra!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      clearCart();
      navigate('/');
    } catch (error) {
      console.error('Error simulado:', error);
    } finally {
      setIsBuying(false);
    }
  };

  return (
    <Center>
      <Box p={4} maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Heading size="md" mb={4}>
          Carrito de Compras
        </Heading>
        {cart.length === 0 ? (
          <Flex justifyContent="center" alignItems="center" h="200px" direction="column">
            <Icon as={BsCartX} boxSize={12} color="gray.500" mb={4} />
            <Text fontSize="xl" color="gray.500" fontWeight="semibold">
              Tu carrito está vacío
            </Text>
          </Flex>
        ) : (
          <VStack align="stretch" spacing={4}>
            <List spacing={3}>
              {cart.map((item) => (
                <ListItem key={item.id}>
                  <HStack justifyContent="space-between">
                    <Image
                      src={item.image}
                      alt={item.title}
                      boxSize="50px"
                      objectFit="cover"
                      mr={2}
                    />
                    <VStack align="start">
                      <Text fontWeight="bold">{item.title}</Text>
                      <Text>Cantidad: {item.quantity}</Text>
                      <Text>Precio unitario: ${item.price}</Text>
                    </VStack>
                    <IconButton
                      aria-label="Eliminar producto"
                      icon={<DeleteIcon />}
                      onClick={() => removeItem(item.id)}
                    />
                  </HStack>
                </ListItem>
              ))}
            </List>
            <Text fontSize="xl">Total: ${getTotalPrice()}</Text>
            <Button colorScheme="red" onClick={clearCart} leftIcon={<DeleteIcon />}>
              Vaciar Carrito
            </Button>
            <Button
              colorScheme="teal"
              onClick={() => handleBuy()}
              isLoading={isBuying}
              loadingText="Procesando..."
            >
              Finalizar Compra
            </Button>
          </VStack>
        )}
      </Box>
    </Center>
  );
};

export default Cart;