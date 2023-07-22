

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
     
      </div>

    </div>
  );
};

export default ProductDetails;
