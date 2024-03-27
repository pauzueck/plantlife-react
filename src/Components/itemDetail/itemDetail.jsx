import React, { useContext } from 'react';
import ItemCount from "../itemCount/itemCount";
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/cartContext';
import './itemDetail.css';



const ItemDetail = ({ plant }) => {
    const { cart, setCart, qtyPlants } = useContext(cartContext);

    const handleAddToCart = (quantity) => {
        const itemAdded = { ...plant, quantity };

        const inCartIndex = cart.findIndex((item) => item.id === itemAdded.id);

        if (inCartIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[inCartIndex].quantity += quantity;
            setCart(updatedCart);
        } else {
            setCart([...cart, itemAdded]);
        }
    };

    return (
        <div className='plantDetail'>
            <div className='plantDescription'>
                <h3>{plant.name}</h3>
                <p>Description: {plant.description}</p>
                <p>Category: {plant.category}</p>
                <p>Price: ${plant.price}</p>
                <p>Stock: {plant.stock}</p>
                <ItemCount stock={plant.stock} initial={1} onAdd={handleAddToCart} />
                <Link to="/" className="btn btn-secondary">Back to Plant List</Link>
            </div>
            <div>
                <img className='plantImage' src={plant.image} alt={plant.name} />
            </div>
        </div>
    );
};

export default ItemDetail;
