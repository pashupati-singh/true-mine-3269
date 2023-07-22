

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
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Primary Image:</label>
          <input type="text" name="primary_image" value={formData.primary_image} onChange={handleInputChange} />
        </div>
        {/* Add more form fields for other properties */}
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;