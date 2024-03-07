import React, { useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
import './cart.css';



const Cart = () => {
    const { cart, totalPrice, emptyCart } = useContext(cartContext);
    const handleEmpty = () => {
        emptyCart();
    }

    return (
        <div className='yourOrder'>
            <h1>Your Order</h1>
            {
                cart.map((plant) => (
                    <div className='orderInfo' key={plant.id}>
                        <div className='nameImage'>
                            <img className='picturePlant' src={plant.image} alt="" />
                        </div>
                        <div className='pricingDetails'>
                            <h3>{plant.name}</h3>
                            <p>Unit Price ${plant.price} USD</p>
                            <p>Qty:{plant.quantity}</p>
                            <p>Total Price: {plant.price * plant.quantity}</p>
                        </div>
                    </div>
                ))
            }
            {cart.length > 0 ? (
                <div className='totalPrice'>
                    <h2 className='totalofPrice'>Total: ${totalPrice()}</h2>
                    <Link to="/checkout" className="btn btn-primary">Checkout</Link>
                    <button className="btn btn-secondary" onClick={handleEmpty}>Empty Cart</button>
                </div>
            ) : (
                <div className='emptyCart'>
                    <img src="/empty-cart.png"alt="empty-cart" />
                    <h2>Your Shopping Cart is Empty</h2>
                    <Link to="/" className="btn btn-secondary">Return Home</Link>


                </div>
            )}


        </div>
    );
};

export default Cart;

