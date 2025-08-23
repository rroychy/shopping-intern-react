import React from 'react';
import {Helmet} from 'react-helmet';
import { Link } from 'react-router-dom';
import '../css/footer_global.css';
import NewCart from '../jsx/cart-operation-1';
import { useCart } from './cart-context';

function Footer() {
    const {openCart} = useCart();
    return (
    <div className='footer-container'>
    <Helmet>
    <meta name='viewport' content='width=device-width , initial-scale=1.0'/>
    </Helmet>
        <div className='footer-above'>
            <div className='footer-columns'>

                <div className='footer-left'>
                    <img src='/assets/logo/aoho_logo_trans.svg' alt='logo' className='footer-logo' />
                    <h4 className='footer-column-heading'>Follow Us Here</h4>
                    <div className='social-icons'>
                        <a href="#"><img src='/assets/logo/instagram.svg' alt='logo_insta' className='social-logo'/></a>
                        <a href="#"><img src='/assets/logo/facebook.svg' alt='logo_insta' className='social-logo'/></a>
                    </div>
                </div>
            

                <div className='footer-column-nest-columns'>
                    <div className='nested-column'>
                        <h4 className='footer-column-heading'>Quick Links</h4>
                        <Link to="/">Home</Link><br/>
                        <Link to="/about">About</Link><br/>
                        <Link to="/shop">Shop</Link><br/>
                        <Link to="/lookbook">Look Book</Link><br/>
                        <Link to="/contact">Contact Us</Link>
                    </div>
                
                    <div className='nested-column'>
                        <h4 className='footer-column-heading'>Accounts</h4>
                        <a href="/login">Login</a><br/>
                        <a href="#">Wishlist</a><br />
                        <a href="#">Order History</a><br />
                        <a href="#">Buy in Bulk</a>
                    </div>

                    <div className='nested-column'>
                        <h4 className='footer-column-heading'>Policies</h4>
                        <a href="#">Privacy Policy</a><br />
                        <a href="#">Terms and Conditions</a><br />
                        <a href="#">Shipping Policy</a><br />
                        <a href="#">Return and Cancellation Policy</a><br />
                        <a href="#">FAQ's</a>
                    </div>
                </div>
                <div className='footer-right'>
                    <h4 className='footer-column-heading'>Our Outlet</h4>
                    <p className='paragraph-right'>Plot 1 , ABCD Road <br />City B<br /></p>
                </div>
            </div>
        </div>
                <div className='footer-below'>
                    <p>&copy; 2025 Awebsite. All rights reserved</p>
        </div>
    </div>
);
}

export default Footer;
