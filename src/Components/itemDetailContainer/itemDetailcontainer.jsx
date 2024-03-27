import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../itemDetail/itemDetail';
import {doc, getDoc} from "firebase/firestore";
import { db } from '../../main';


const ItemDetailContainer = () => {
    const { id } = useParams();
    const [plant, setPlant] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        const docRef = doc(db, "plants", id);
        getDoc(docRef)
        .then((resp)=>{
            setPlant(
                { ...resp.data(), id: resp.id}
            );
        })

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
