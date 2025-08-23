import React from 'react';
import '../../css/home/made_in_bengal_home.css';
function Bengal(){
    return (
     <div className='container-bengal'>
       <div className='image-with-overlay-left'>
        <img src='./assets/picture/made_bengal_left.png'/>
       </div>
       <div className='image-with-overlay-right'>
        <img src='./assets/picture/made_bengal_right.png'/>
       </div>
       <div className='overlay-text top-centered'>
            <p className='small-heading'>Made in Bengal</p>
            <h1 className='main-heading'>Meera Collection</h1>
            <p className='description'>Hand embriodered by local artisans of West Bengal</p>
            <button className="product-button">View all Products <img src='assets/logo/Vector.svg'/></button>
        </div>
     </div>
    );
}
export default Bengal;