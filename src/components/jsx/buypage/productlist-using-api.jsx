import {useParams, Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import ProductCard from './product-card';
import '../../css/buypage/shop_collection.css';

function ShopA() {
    const { category } = useParams();
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        let url = category
        ? `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`
        : 'https://fakestoreapi.com/products';

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
            setProducts(data);
        } else {
        
            return fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(fallbackData => setProducts(fallbackData));
        }
        })
        .catch(err => {
        console.log('Fetch error:', err);
        })
        .finally(() => setLoading(false));
    }, [category]);
    if (loading){
        return (
            <div className='shop-collection-section'>
                <h1 className='shop-collection-heading'>Loading products...</h1>
            </div>
        );
    }
    return (
        <div className='shop-collection-section'>
            <title>Products</title>
            <h1 className='shop-collection-heading'>
                {category
                    ? `Shop: ${category.charAt(0).toUpperCase() + category.slice(1)}`
                    : 'Shop Our Collection'
                }
            </h1>
            <div className='shop-collection-grid'>
                {products.length === 0 ? (
                    <div style={{color:'#622B1E',fontWeight:600,fontSize:'1.5rem',width:'100%',textAlign:'center'}}>
                    No Products Found</div>
                ):(
                    products.map(product => (
                        <ProductCard key={product.id} product={product}/>
                    ))
                )}
        </div>
    </div>
    );
}
export default ShopA;