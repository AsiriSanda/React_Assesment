import React from 'react';
import CartManage from '../pages/Cart/CartManage';
import Dashboard from '../pages/Dashboard/Dashboard';
import ProductManage from '../pages/Product/ProductManage';
import UserRegistration from '../pages/User/UserRegistration';
import { Route, Router, Routes } from 'react-router-dom';
import Login from '../pages/LogIn/Login';


function App() {

  return (
    // <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="register" element={<UserRegistration />} />
        <Route exact path="dashboard" element={<Dashboard />} />
        <Route exact path="products" element={<ProductManage />} />
        <Route path="cart" element={<CartManage />} />
      </Routes>
    // </Router>
    // <div className="App">
    //     {/* <Login />     */}
    //     {/* <Dashboard /> */}
    //     {/* <ProductManage /> */}
    //     {/* <CartManage /> */}
    //     {/* <UserRegistration /> */}
    // </div>
  );
}

export default App;
