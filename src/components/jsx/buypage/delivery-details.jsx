import React from 'react';
import '../../css/buypage/delivery-details.css';
import '../../css/buypage/collapse-panel.css';

function Delivery_Det() {
    return (
        <div className='delivery-details-section'>
            <div className='logo-details'>
                <img
                    src='/assets/logo/iconoir_lot-of-cash.png'
                    alt='cash-image' className='logo-1-1'/>
                <div className='expected-date'>Expected delivery by Tuesday, July 08</div>
                <div className='extra-details'>Free shipping on orders above $29.99</div>
            </div>
            <div className='logo-details-2'>
                <img
                    src='/assets/logo/streamline_shipping-box-1.png'
                    alt='cash-image' className='logo-2'/>
                <div className='extra-details-2'>Cash on Delivery (COD) available</div>
            </div>
            <div class="wrap-collabsible"> 
                <input id="collapsible" class="toggle" type="checkbox"/> 
                <label htmlFor="collapsible" class="lbl-toggle">Product Details</label>
                <div class="collapsible-content">
                    <div class="content-inner">
                        <p>AUTHENTIC STANDARD QUALITY</p>
                    </div>
                </div>
            </div>
            <div class="wrap-collabsible"> 
                <input id="collapsible1" class="toggle" type="checkbox"/> 
                <label htmlFor="collapsible1" class="lbl-toggle">Product and Delivery</label>
                <div class="collapsible-content">
                    <div class="content-inner">
                        <p>Return within 3 day(s).</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Delivery_Det;