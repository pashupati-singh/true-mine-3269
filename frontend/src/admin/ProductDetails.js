

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const ProductDetails = () => {
  const { productID } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {

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
<<<<<<< HEAD
        <img src={product.primary_image} alt={product.title} style={productImageStyle} />
        <h3 style={productTitleStyle}>{product.title}</h3>
        <p style={productPriceStyle}>Price: ${product.price}</p>
        <p style={productDescriptionStyle}>Description: {product.description}</p>
        {/* Add more product details as needed */}
      </div>
      <Link to={`/admin/product/${productID}/edit`} style={{ marginRight: '10px' }}>Edit</Link>
      <Link to={`/admin/product/${productID}/delete`}>Delete</Link>
=======
        <img src={product.primary_image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
     
      </div>

>>>>>>> a706de9d79cd9c405ce1b5a7209fd682da7f4573
    </div>
  );
};

export default ProductDetails;