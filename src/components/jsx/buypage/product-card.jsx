import React from 'react';
import {Link} from 'react-router-dom';
import { useCart } from '../cart-context';
import '../../css/buypage/shop_collection.css';

function ProductCard({product}) {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
    const item = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
    };
    addToCart(item);
    alert('Item added to cart');
    };
    return (
        <div className='shop-product-card'>
            <img 
                className='shop-product-image'
                src={product.image}
                alt={product.title}/>
            <div className='shop-product-info'>
                <div className='shop-product-title'>
                    <Link to={`/product/${product.id}`} style={{ textDecoration:'none',color:'inherit'}}>
                    {product.title}
                    </Link>
                </div>
                <div className='shop-product-price'>${product.price}</div>
                <button className='shop-product-button'onClick={handleAddToCart}>ADD TO CART</button>
            </div>
        </div>
    );
}
export default ProductCard;