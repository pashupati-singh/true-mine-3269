

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    backgroundColor: '#007bff',
    padding: '10px 20px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0',
    padding: '0',
  };

  const liStyle = {
    marginRight: '20px',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '10px',
    borderRadius: '5px',
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}><Link to="/admin" style={linkStyle}>Home</Link></li>
        <li style={liStyle}><Link to="/admin/product/add" style={linkStyle}>Add Product</Link></li>
        <li style={liStyle}><Link to="/admin/product/edit" style={linkStyle}>Edit Product</Link></li>
        <li style={liStyle}><Link to="/admin/product/delete" style={linkStyle}>Delete Product</Link></li>
        {/* Add more navigation links for other pages */}
      </ul>
    </nav>
  );
};

export default Navbar;

// export default Navbar;