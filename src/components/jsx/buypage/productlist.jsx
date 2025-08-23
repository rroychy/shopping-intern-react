import React from 'react';
import { useParams } from 'react-router-dom';
import '../../css/buypage/shop_collection.css';

const products = [
  {
    id: 1,
    name: 'Kota Doria Kurta Dupatta Set - Pink',
    image: '/assets/picture/1_Slide.png',
    price: '₹4,580',
    category: 'kota'
  },
  {
    id: 2,
    name: 'Handcrafted Ajrakh Scarf',
    image: '/assets/picture/ajrakh_img_1.png',
    price: '₹1,299',
    category: 'ajrakh'
  },
  {
    id: 3,
    name: 'Bagh Printed Dupatta',
    image: '/assets/picture/bagh_printed_img_2.png',
    price: '₹1,499',
    category: 'bagh'
  },
  {
    id: 4,
    name: 'Katha Embroidered Stole',
    image: '/assets/picture/katha_img_3.png',
    price: '₹1,199',
    category: 'kantha'
  },
  {
    id: 5,
    name: 'Sanganeri Print Saree',
    image: '/assets/picture/sanganeri_image_4.png',
    price: '₹2,499',
    category: 'sanganeri'
  }
];

function Shop() {
  const { category } = useParams();
  const filteredProducts = category
    ? products.filter(p => p.category === category)
    : products;

  return (
    <div className="shop-collection-section">
      <h1 className="shop-collection-heading">
        {category ? `Shop: ${category.charAt(0).toUpperCase() + category.slice(1)}` : 'Shop Our Collection'}
      </h1>
      <div className="shop-collection-grid">
        {filteredProducts.length === 0 ? (
          <div style={{color:'#622B1E',fontWeight:600,fontSize:'1.5rem',width:'100%',textAlign:'center'}}>No products found.</div>
        ) : (
          filteredProducts.map(product => (
            <div className="shop-product-card" key={product.id}>
              <img className="shop-product-image" src={product.image} alt={product.name} />
              <div className="shop-product-info">
                <div className="shop-product-title">{product.name}</div>
                <div className="shop-product-price">{product.price}</div>
                <button className="shop-product-button">
                  ADD TO CART
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft:'0.5em'}}>
                    <path d="M4 9H14" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 6L14 9L11 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Shop;