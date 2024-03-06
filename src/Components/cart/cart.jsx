import React, { useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';


const Cart = () => {
    const { cart, totalPrice, emptyCart } = useContext(cartContext);
    const handleEmpty = () => {
        emptyCart ();
    }

    return (
        <div className='container'>
            <h1>Your Order</h1>
            {
                cart.map((plant) => (
                    <div key={plant.id}>
                    <img src={plant.image} alt="" />
                    <h2>{plant.name}</h2>
                    <p>Unit Price ${plant.price} USD</p>
                    <p>Qty:{plant.quantity}</p>
                    <p>Total Price: {plant.price * plant.quantity}</p>
                    </div>
                ))
            }
            {cart.length > 0 ? (
    <div>
        <h2>Total: ${totalPrice()}</h2>
        <button onClick={handleEmpty}>Empty Cart</button>
    </div>
) : (
    <div>
        <h2>Your Shopping Cart is Empty</h2>
        <Link to="/" className="btn btn-secondary">Return Home</Link>

    </div>
)}


        </div>
    );
};

export default Cart;

