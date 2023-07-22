

import React from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const DeleteProductModal = () => {
  const { productID } = useParams();
  const history = useHistory();

  const handleDelete = () => {
    // Send a request to the API to delete the product by its ID
    axios.delete(`https://gardenguru-server.onrender.com/product/delete/${productID}`)
      .then(response => {
        // Handle the response, maybe show a success message
        console.log('Product deleted successfully!');
        history.push('/admin'); // Redirect to the home page after deleting the product
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Delete Product</h2>
      <p>Are you sure you want to delete this product?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteProductModal;