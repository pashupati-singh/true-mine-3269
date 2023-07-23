import axios from 'axios';

export const getCartAPI = async () => {
  let response = await axios.get('https://gardenguru-server.onrender.com/cart/cartproducts');
  return response.data;
};

export const deleteItemAPI = async (id) => {
  await axios.delete(`https://gardenguru-server.onrender.com /cart/delete/${id}`);
};