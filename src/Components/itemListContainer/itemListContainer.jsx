import React, { useState, useEffect } from 'react';
import './itemListContainer.css';
import plantJson from "../../../plants.json";
import { useParams } from "react-router-dom";

function asyncMock(categoryId) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(categoryId === undefined){
                resolve(plantJson);
            }else {
                const filterPlants = plantJson.filter((item) => {
                    return item.categoryParam === categoryId
                })
                resolve(filterPlants)
            }
            
        }, 1000);
    });
}

export default function ItemListContainer() {

    const { categoryId } = useParams()
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        asyncMock(categoryId).then((res) => setPlants(res));
    }, [categoryId]);

    return (
        <div className="container">
        <h2>The place to find your perfect plant companion</h2>
        <div className="row">
            {plants.map(plant => (
            <div key={plant.id} className="col-md-4 mb-4">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{plant.name}</h5>
                    <p className="card-text">{plant.description}</p>
                    <p className="card-text">Price: ${plant.price}</p>
                    <p className="card-text">Stock: {plant.stock}</p>
                    <p className="card-text">Category: {plant.category}</p>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
    }


