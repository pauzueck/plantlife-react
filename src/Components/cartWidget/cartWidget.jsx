import React, { useContext } from 'react'
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import './cartWidget.css';
import { cartContext } from '../../context/cartContext';



const Cartwidget = () => {

    const { qtyPlants } = useContext(cartContext);

    return (
        <div className='container'>
            <button>
            <PiShoppingCartSimpleFill className='icon'/>
            </button>
            <span className='numberofItem'>{qtyPlants()}</span>
        </div>
        
    )
}

export default Cartwidget
