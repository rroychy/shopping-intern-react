import React from 'react';
import '../css/slideshow.css'
function Slideshow() {
    return (
    <div className='main-container'>
        <div className='slideshow-container'>
            {/* 1 */}
                <div className='slide active'>
                    <img src='/main_banner.png' alt='Banner 1' className='images'/>
                    <div className='text-on-image'>
                        <h1>Explore Ajrakh Kurtas Collection</h1>
                        <p>Master artisans from Gujrat</p>
                        <div className='shop-now-button'>
                            Shop Now
                        </div>
                    </div>
                </div>
            <div className='navigation-dots'>
                <span className='dot active'></span>
                <span className='dot'></span>
                <span className='dot'></span>
            </div>
        </div>
    </div>
);}
export default Slideshow;