import React from 'react';
import "./item.css"

    const Item = ({ plant }) => {
    return (
        <div>
        <img src={plant.image} alt="" />
        <h2>{plant.name}</h2>
        <p>{plant.description}</p>
        <p>{plant.category}</p>
        <p>{plant.price}</p>
        <p>{plant.stock}</p>
        </div>
    );
    };

export default Item;