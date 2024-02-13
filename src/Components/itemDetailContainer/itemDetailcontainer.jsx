import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import plantJson from "../../../plants.json";
import './itemDetailContainer.css';
import ItemCount from "../itemCount/itemCount";



function fetchPlantById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const plant = plantJson.find(plant => plant.id === parseInt(id));
            if (plant) {
                resolve(plant);
            } else {
                reject(new Error('Plant not found'));
            }
        }, 1000);
    });
}
const ItemDetailContainer = () => {
    const { id } = useParams();
    const [plant, setPlant] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchPlantById(id)
            .then(plant => setPlant(plant))
            .catch(error => setError(error.message));
    }, [id]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!plant) {
        return null; // Render nothing if plant is not found
    }

    return (
        <div>
            <div className='plantDetail'>
            <div className='plantDescription'>
                <h3>{plant.name}</h3>
                <p>Description: {plant.description}</p>
                <p>Category: {plant.category}</p>
                <p>Price: ${plant.price}</p>
                <p>Stock: {plant.stock}</p>
                <ItemCount stock={plant.stock} initial={1} />
                <Link to="/" className="btn btn-secondary">Back to Plant List</Link>
            </div>
            <div>
                <img className='plantImage' src={plant.image} alt={plant.name} />
            </div>
            </div>
        </div>
    );
};

export default ItemDetailContainer;