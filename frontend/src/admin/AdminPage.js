

import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from './HomePage';
import ProductDetails from '../components/ProductDetails';
import AddProductForm from '../components/AddProductForm';
import EditProductForm from '../components/EditProductForm';
import DeleteProductModal from '../components/DeleteProductModal';

const AdminPage = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/admin" component={HomePage} />
        <Route exact path="/admin/product/add" component={AddProductForm} />
        <Route exact path="/admin/product/:productID" component={ProductDetails} />
        <Route exact path="/admin/product/:productID/edit" component={EditProductForm} />
        <Route exact path="/admin/product/:productID/delete" component={DeleteProductModal} />
        {/* Add more routes for other pages */}
      </Switch>
    </div>
  );
};

export default AdminPage;
