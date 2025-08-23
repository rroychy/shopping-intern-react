import React, { useState } from 'react';
import { useCart } from './cart-context';
import {Link} from 'react-router-dom';
import '../css/cart-scroll.css'; 

export default function Cart() {
  const [showCart, setShowCart] = useState(false);
  const { cartItems } = useCart();
  return (
    <>
      {/* Cart Icon Button */}
      <div onClick={() => setShowCart(true)} className="icon-wrapper" title='cart'>
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#622B1E" viewBox="0 0 16 16">
          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
        </svg>
      </div>

      {/* Slide-out Panel */}
{showCart && (
  <div className="cart-backdrop" onClick={() => setShowCart(false)}>
    <div
      className={`cart-slide-panel ${showCart ? 'open' : ''}`}
      onClick={(e) => e.stopPropagation()}
    >
      <button onClick={() => setShowCart(false)} className="close-button-slide">✖</button>

      {cartItems.length === 0 ? (
        <p>
          Your Cart is empty <br />
          <Link to="/shop" style={{ color: '#622b1e', textDecoration: 'underline' }}>
            Shop here
          </Link>
        </p>
      ) : (
        <>
          <h3>Your Cart</h3>
          <ul className='cart-items-list'>
            {cartItems.map((item, index) => (
              <li key={index} className='cart-item'>
              <img src={item.image}  alt={item.title} className='cart-item-img'/>
              <div className='cart-item-details'>
                <span className='cart-item-title'>{item.title}</span>
                <span className='cart-item-price'>${item.price}</span>
              </div>
              </li>
            ))}
          </ul>
          <button className="checkout-button">Checkout</button>
        </>
      )}
    </div>
  </div>
)}
    </>
  );
}