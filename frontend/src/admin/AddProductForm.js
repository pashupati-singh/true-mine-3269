

import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    primary_image: '',
    alternative_image: '',
    title: '',
    price: '',
    description: '',
    old_price: '',
    category: '',
    type: '',
  });

  const history = useHistory();

  const formContainerStyle = {
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

  const inputStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to the API to create a new product
    axios.post('https://gardenguru-server.onrender.com/product/addproduct', formData)
      .then(response => {
        // Handle the response, maybe show a success message
        console.log('Product added successfully!');
        history.push('/admin'); // Redirect to the home page after adding the product
      })
      .catch(error => console.error(error));
  };

  return (
    <div style={formContainerStyle}>
      <h2 style={headingStyle}>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Primary Image:</label>
          <input
            type="text"
            name="primary_image"
            value={formData.primary_image}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label>Alternative Image:</label>
          <input
            type="text"
            name="alternative_image"
            value={formData.alternative_image}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label>Old Price:</label>
          <input
            type="text"
            name="old_price"
            value={formData.old_price}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label>Type:</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;