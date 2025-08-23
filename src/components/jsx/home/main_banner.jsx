import React from 'react';
import '../../css/home/main_banner.css';
import { Link } from 'react-router-dom';

function SlideShow_1(){
    return (
        <div className='main-container'>
                <img src='/assets/picture/main_banner.png' alt='Banner 1' className='images'/>
                <div className='text-on-image'>
                    <h1>Explore Ajrakh Kurtas Collection</h1>
                    <p>Master artisans from Gujrat</p>
                    <div className='shop-now-button-p'>
                        <Link to="/shop" className='shop-now-button'>Shop Now</Link>
                    </div>
                </div>
        </div>    
    )
}
export default SlideShow_1;

