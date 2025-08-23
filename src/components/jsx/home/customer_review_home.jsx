import React from 'react';
import '../../css/home/customer_review_home.css';
function Customer(){
    return (
    <div className='review-container'>
        <div className='review-heading'>
            <h1>Let Customers speak for us</h1>
        </div>
                <div className='review-list'>
                    <div className='review-box'>
                        <div className='left-image'>
                            <img src='/assets/picture/review_1.png' alt='review_1'/>
                        </div>
                        <div className='right-text'>
                                <div className='icon-star'>
                                    <img src='/assets/logo/Star_1.png' alt='star'/>
                                    <img src='/assets/logo/Star_1.png' alt='star'/>
                                    <img src='/assets/logo/Star_1.png' alt='star'/>
                                    <img src='/assets/logo/Star_1.png' alt='star'/>
                                <p className='review-text-head'>A good product</p>
                                <p className='review-text-main'>I am glad to be using this product , recommend this product to everyone</p>
                                <div className='review-divider'/>
                                <p className='review-name'>Maria</p>
                                <p className='review-place'>Kolkata , India</p>
                                </div>
                        </div>
                    </div>
                    <div className='review-box'>
                        <div className='left-image'>
                            <img src='/assets/picture/review_2.png' alt='review_1'/>
                        </div>
                        <div className='right-text'>
                             <div className='icon-star'>
                                    <img src='/assets/logo/Star_1.png' alt='star'/>
                                    <img src='/assets/logo/Star_1.png' alt='star'/>
                                    <img src='/assets/logo/Star_1.png' alt='star'/>
                                    <img src='/assets/logo/Star_1.png' alt='star'/>
                                    <img src='/assets/logo/Star_1.png' alt='star'/>
                                <p className='review-text-head'>A good product</p>
                                <p className='review-text-main'>I am glad to be using this product , recommend this product to everyone</p>
                                <div className='review-divider'/>
                                <p className='review-name'>Shandya</p>
                                <p className='review-place'>Jabalpur , India</p>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
    );
}
export default Customer;