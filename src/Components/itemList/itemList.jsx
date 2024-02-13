import React from 'react';
import Item from '../item/item';

    const ItemList = ({ plants }) => {
    return (
        <div>
        {plants.map((plant) => (
            <Item key={plant.id} plant={plant} />
        ))}
        </div>
    );
    };

export default ItemList;