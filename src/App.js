import React , {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
// import Navbar from './components/jsx/navbar_global';
import Navbar01 from './components/jsx/navigation-bar';
import Footer from './components/jsx/footer_global';
import Contact from './components/jsx/contact/contact_new';
import About from './components/jsx/about/about';
import Login from './components/jsx/login/login';
import Account from './components/jsx/login/create-account';
import LookBook from './components/jsx/lookbook/lookbook';
import Shop_Products from './components/jsx/buypage/productlist-using-api';
import BuyPage from './components/jsx/buypage/product-page';
import { CartProvider } from './components/jsx/cart-context';
function app() {
  return (
    <CartProvider>
    <Router>
      <title>Home | AohoShop</title>
      <div className='page-content'>
        <Navbar01/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/create-account" element={<Account/>}/>
        {/* <Route path="/lookbook" element={<LookBook/>}/> */}
        <Route path="/shop" element={<Shop_Products />} />
        <Route path="/shop/:category" element={<Shop_Products/>}/>
        <Route path="/product/:id" element={<BuyPage/>}/>
      </Routes>
      <Footer/>
    </div>
  </Router>
  </CartProvider>
  );
}

export default app;
