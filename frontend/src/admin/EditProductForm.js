

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const EditProductForm = () => {
  const { productID } = useParams();
  const [formData, setFormData] = useState(null);

  const history = useHistory();

  useEffect(() => {
    // Fetch product details from the API based on the product ID and set it in the state
    axios.get(`https://gardenguru-server.onrender.com/product/getproduct/${productID}`)
      .then(response => setFormData(response.data))
      .catch(error => console.error(error));
  }, [productID]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the updated form data to the API to update the product
    axios.patch(`https://gardenguru-server.onrender.com/product/update/${productID}`, formData)
      .then(response => {
        // Handle the response, maybe show a success message
        console.log('Product updated successfully!');
        history.push('/admin'); // Redirect to the home page after updating the product
      })
      .catch(error => console.error(error));
  };

  if (!formData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Primary Image:</label>
          <input type="text" name="primary_image" value={formData.primary_image} onChange={handleInputChange} />
        </div>
        {/* Add more form fields for other properties */}
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default EditProductForm;