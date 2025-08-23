import React, { useState } from 'react';
import '../../css/buypage/quantity-selector.css'; 

function QuantitySelector({ initialQuantity = 1, minQuantity = 1 }) {
    const [quantity, setQuantity] = useState(initialQuantity);

    const handleDecrement = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, minQuantity));};
    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);};
    const handleChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >= minQuantity) {
            setQuantity(value);} 
        else if (e.target.value === '') 
            {setQuantity('');}
    };
    const handleBlur = () => {
        if (quantity === '' || isNaN(quantity) || quantity < minQuantity) 
            {setQuantity(minQuantity);}
    };

    return (
        <div className="quantity-selector">
            <label htmlFor="product-quantity" className="quantity-label">QUANTITY</label>
            <div className="quantity-counter">
                <button
                    className="quantity-button"
                    onClick={handleDecrement}
                    disabled={quantity <= minQuantity}
                >
                    &ndash;
                </button>
                <input
                    type="text"
                    id="product-quantity"
                    className="quantity-input"
                    value={quantity}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    inputMode="numeric" 
                    pattern="[0-9]*"/>
                <button
                    className="quantity-button"
                    onClick={handleIncrement}
                >+</button>
            </div>
        </div>
    );
}

export default QuantitySelector;