import React from 'react';
import '../css/Shop_category.css';
function Shop_Category() {

  const scrollLeft = () => {
    document.querySelector('.slideshow').scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    document.querySelector('.slideshow').scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  };

  return (
   
    <div className='heading'>
       <div className='inner-content'>
      <h1>Shop by Category</h1>      
      <div className='slider-wrapper'>
        <button className="arrow left-arrow" onClick={scrollLeft}>
          <img src="/left_arrow.svg" alt="Left Arrow" />
        </button>

        <div className='slideshow'>
        <div className='slide-img'>
          <img src="/1_Slide.png" alt="slideshow-1" className='slide-img' />
          <p className='caption'>Bagh Printed Kurtas</p>
        </div>
        <div className='slide-img'>
          <img src="/3_Slide.png" alt="slideshow-3" className='slide-img' />
          <p className='caption'>Katha Collection</p>
        </div>
         <div className='slide-img'>
          <img src="/4_Slide.png" alt="slideshow-4" className='slide-img' />
          <p className='caption'>Sanganeri Collection</p>
        </div>
        <div className='slide-img'>
          <img src="/5_Slide.png" alt="slideshow-5" className='slide-img' />
          <p className='caption'>Bagru Collection</p>
        </div>
        <div className='slide-img'>
          <img src="/6_Slide.png" alt="slideshow-6" className='slide-img' />
          <p className='caption'>Kota Collection</p>
        </div>
        <div className='slide-img'>
          <img src="/7_Slide.png" alt="slideshow-7" className='slide-img' />
          <p className='caption'>Akola Printed Kurtas</p>
        </div>
        <div className='slide-img'>
          <img src="/hidden_2.png" alt="hidden-left" className="slide-img hidden-img"/>
          <p className='caption'>Ajrakh Kurtas</p>
        </div>
      </div>
        <button className="arrow right-arrow" onClick={scrollRight}>
          <img src="/right_arrow.svg" alt="Right Arrow" />
        </button>
        </div>
        </div>
    </div>
    
  );
}
export default Shop_Category;