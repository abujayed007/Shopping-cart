import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props)
    const {handleAddtoCart, product} =props
    const {category, id, name, img, price, quantity, seller, ratings} = props.product
    
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div>
            <div className="product-info">
            <h3 className='name'>Name:{name}</h3>
            <p>Price:{price}</p>
            <p>Seller: {seller}</p>
            <p>Rating: {ratings}</p>
            </div>
           </div>
           <button onClick={() =>handleAddtoCart(product)} className='btn-cart'>
            <p>Add To Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default Product;