import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { deleteItem, AddToCart } from '../Redux/carts/action';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.cart);

  const handleDeleteItem = (id) => {
    dispatch(deleteItem(id));
  };

  const handleIncreaseQuantity = (item) => {
    // Increase the quantity of the item in the cart
    dispatch(AddToCart({ ...item, quantity: item.quantity + 1 }));
  };

  const handleDecreaseQuantity = (item) => {
    // Decrease the quantity of the item in the cart
    if (item.quantity > 1) {
      dispatch(AddToCart({ ...item, quantity: item.quantity - 1 }));
    }
  };

  return (
    <Box bg="white">
      <Heading size="lg" my="4">
        Shopping Cart
      </Heading>
      {cartItems.length === 0 ? (
        <Text fontSize="lg">Your cart is empty.</Text>
      ) : (
        <Box>
          {cartItems.map((item) => (
            <Flex key={item._id} alignItems="center" my="2">
              <Box flex="1">
                <Text fontSize="md">{item.title}</Text>
                <Text fontSize="sm" color="gray.500">
                  Price: ₹{item.price}
                </Text>
              </Box>
              <Flex alignItems="center" gap="2">
                <Button
                  size="sm"
                  onClick={() => handleDecreaseQuantity(item)}
                >
                  -
                </Button>
                <Text fontSize="md">{item.quantity}</Text>
                <Button
                  size="sm"
                  onClick={() => handleIncreaseQuantity(item)}
                >
                  +
                </Button>
              </Flex>
              <Button
                ml="4"
                size="sm"
                variant="outline"
                onClick={() => handleDeleteItem(item._id)}
              >
                Remove
              </Button>
            </Flex>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Cart;
