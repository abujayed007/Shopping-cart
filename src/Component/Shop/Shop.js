import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product'
import Cart from '../../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const  [cart, setCart] = useState([])
    useEffect(()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    const handleAddtoCart = (product) =>{
        // console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
           {
            products.map(product => <Product 
                product={product} 
                key={product.id}
                handleAddtoCart ={handleAddtoCart}>  
                </Product>)
           }
            </div>
           <Cart cart={cart}></Cart>
        </div>
    );
};

export default Shop;