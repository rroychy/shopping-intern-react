import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Nav_right_icons_global.css';
import Cart from '../jsx/cart-operation';
import NewCart from '../jsx/cart-operation-1';
import { CartProvider } from './cart-context';

function NavIcons() {

        //Account Page
        const navigate = useNavigate();
        const isLoggedIn = localStorage.getItem('token');
        const HandleAccountClick = () => {
            if (isLoggedIn) {
                navigate('/account');
            } else {
                navigate('/login');
            }
        };
        return (
        <div className='nav-icons'>
                {/* class="account" */}
            <div onClick={HandleAccountClick} className='icon-wrapper' title='Account'>
            <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#622B1E"  viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg></div>


                {/* class="liked-items" */}
            <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#622B1E"  viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
            </svg>

                {/* class="cart" */}
            <NewCart/>
            

        </div>
    );
}
    export default NavIcons;