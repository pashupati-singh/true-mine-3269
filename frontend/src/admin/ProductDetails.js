

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

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <div>
        <img src={product.primary_image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
        {/* Add more product details as needed */}
      </div>
      <Link to={`/admin/product/${productID}/edit`}>Edit</Link>
      <Link to={`/admin/product/${productID}/delete`}>Delete</Link>
    </div>
  );
};

export default ProductDetails;
