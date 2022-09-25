import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';
import Cart from './pages/Cart/Cart';
import Payment from './pages/Payment/Payment';
import Main from './pages/main/main';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/main" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
