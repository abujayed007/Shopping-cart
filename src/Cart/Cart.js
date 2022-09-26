import React from 'react';

const Cart = ({cart}) => {
    return (
        <div className="cart-container">
                <h1>Order Items</h1>
                <h5>Selected Items : {cart.length}</h5>
            </div>
    );
};

export default Cart;