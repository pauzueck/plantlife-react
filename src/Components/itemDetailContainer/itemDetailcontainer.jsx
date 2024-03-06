import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import plantJson from "../../../plants.json";
import ItemDetail from '../itemDetail/itemDetail';

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
        return null; 
    }

    return <ItemDetail plant={plant} />;
};

export default ItemDetailContainer;
