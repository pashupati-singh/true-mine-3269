

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const ProductDetails = () => {
  const { productID } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details from the API based on the product ID and set it in the state
    axios.get(`https://gardenguru-server.onrender.com/product/getproduct/${productID}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error(error));
  }, [productID]);

  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
  };

  const productImageStyle = {
    width: '100%',
    marginBottom: '20px',
  };

  const productTitleStyle = {
    fontSize: '24px',
    marginBottom: '10px',
  };

  const productPriceStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const productDescriptionStyle = {
    marginBottom: '20px',
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div style={containerStyle}>
      <h2>Product Details</h2>
      <div>
        <img src={product.primary_image} alt={product.title} style={productImageStyle} />
        <h3 style={productTitleStyle}>{product.title}</h3>
        <p style={productPriceStyle}>Price: ${product.price}</p>
        <p style={productDescriptionStyle}>Description: {product.description}</p>
        {/* Add more product details as needed */}
      </div>
      <Link to={`/admin/product/${productID}/edit`} style={{ marginRight: '10px' }}>Edit</Link>
      <Link to={`/admin/product/${productID}/delete`}>Delete</Link>
    </div>
  );
};

export default ProductDetails;