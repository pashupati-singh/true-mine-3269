

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API and set them in the state
    axios.get('https://gardenguru-server.onrender.com/product/getproducts')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
  };

  const productListStyle = {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  };

  const listItemStyle = {
    marginBottom: '10px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '18px',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <h2>Product List</h2>
      <ul style={productListStyle}>
        {products.map(product => (
          <li key={product._id} style={listItemStyle}>
            <Link to={`/admin/product/${product._id}`} style={linkStyle}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;