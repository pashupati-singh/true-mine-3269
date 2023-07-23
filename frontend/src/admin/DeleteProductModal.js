

import React from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const DeleteProductModal = () => {
  const { productID } = useParams();
  const history = useHistory();

  const modalContainerStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f7f7f7',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    marginTop: '0',
    marginBottom: '20px',
    fontSize: '24px',
    textAlign: 'center',
  };

  const paragraphStyle = {
    marginBottom: '20px',
  };

  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

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
    <div style={modalContainerStyle}>
      <h2 style={headingStyle}>Delete Product</h2>
      <p style={paragraphStyle}>Are you sure you want to delete this product?</p>
      <button onClick={handleDelete} style={buttonStyle}>Delete</button>
    </div>
  );
};

export default DeleteProductModal;