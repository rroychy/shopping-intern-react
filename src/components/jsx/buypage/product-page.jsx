import { useLocation,useParams } from 'react-router-dom';
import React , {use, useEffect,useState} from 'react';
import '../../css/buypage/product-details.css';
import '../../css/buypage/shop_collection.css';
import Product from '../buypage/ProductOptions';
import Quantity from '../buypage/quantity-box';
import Delivery from '../buypage/delivery-details';
import ProductCard from './product-card';
function BuyPage() {
    const location=useLocation();
    const {product}=location.state || {};
    const {id}=useParams();
    const [fetchedProduct,setFetchedProduct] = useState(null);
    const [similarProducts,setSimilarProducts] = useState([]);

    useEffect(()=> {
        if (!product){
            fetch(`https://fakestoreapi.com/products/${id}`)
                .then(res=>res.json())
                .then(data=>setFetchedProduct(data))
                .catch(err => console.log('Fetch error:',err));
        }
    }, [id,product]);
    const displayProduct = product || fetchedProduct;
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            const filtered = data.filter(p=>p.id !== Number(id)).slice(0,5);
            setSimilarProducts(filtered);
        })
        .catch(err => console.error('Error fetching similar products',err));
    }, [id]);
    
    if (!displayProduct) {
        return <div className='shop-collection-heading'>Loading Products</div>;
    }
    
    return (
<>
  <div className='container-block'>
    <title>{displayProduct.title}</title>

    <div className='product-pic'>
      <img
        src={displayProduct.image}
        alt={displayProduct.title}
        className='main-product-image'
      />
    </div>

    <div className='buy-prod-details'>
      <div className='title-product-details'>
        {/* Title */}
          <div className='name_of_title'>{displayProduct.title}</div>

        {/* Price */}
        <div className='price-section'>
          <div className='label-amount'>
            <div className='label'>MRP</div>
            <div className='amount'>${displayProduct.price}</div>
          </div>
          <div className='tax-note'>(inclusive of all taxes)</div>
        </div>

        {/* Size Section */}
        {(displayProduct.category === "men's clothing" || displayProduct.category === "women's clothing") && (
        <div className='size-input-dropdown'>
          <select id='product-size' className='size-dropdown'>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="2XL">2XL</option>
          </select>
        </div>)}

        {/* Quantity */}
        <Quantity />

        {/* Share */}
        {/* <div className='share'>
          <a href='' target='_blank' rel='noopener noreferrer' className='share-link'>
            <img src='/assets/logo/share-fill-png.png' alt='Share Icon' className='share-icon' width={20} height={20} />
            <div className='share-text'> Share</div>
          </a>
        </div> */}

        {/* Other Product Options  e.g Button and Checkbox */}
        <div className='other-options'>
          <Product product={displayProduct}/>
        </div>

        {/* Delivery Info */}
        <div className='delivery-details'>
          <Delivery />
        </div>
      </div>
    </div>
  </div>
{/*Similar Products shown below*/}
    <div className='shop-collection-section'>
        <h1 className='shop-collection-heading'>Similar Products</h1>
        <div className='shop-collection-grid'>
            {similarProducts.map(product=> (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div></div>
</>

    );
}
export default BuyPage;