import React, { useState, useEffect } from 'react';
import './itemListcontainer.css';
import { Link, useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from '../../main';



export default function ItemListContainer() {

    const categoryId = useParams().categoryId;
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        const plantsRef = collection(db, "plants");
        const q = categoryId ? query(plantsRef, where("categoryParam", "==", categoryId)) : plantsRef;

        getDocs(q)
        
        .then((resp) => {

            setPlants(
                resp.docs.map((doc)=> {
                    return {...doc.data(), id: doc.id}
                })
            )
        })
    }, [categoryId]);

    return (
        <div className="container">
        <h2>The place to find your perfect plant companion</h2>
        <div className="row">
            {plants.map(plant => (
            <div key={plant.id} className="col-md-3 mb-4">
                <div className="card">
                <div className="card-body">
                    <img className="imagePlant" src={plant.image} alt='plant-image'/>
                    <h5 className="card-title">{plant.name}</h5>
                    <p className="card-price">Price: ${plant.price}</p>
                    <Link to={`/plant/${plant.id}`} className="btn btn-primary">View Details</Link>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
    }


