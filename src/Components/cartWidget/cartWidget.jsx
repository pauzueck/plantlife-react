import React from 'react'
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import './cartWidget.css';



const Cartwidget = () => {
    return (
        <div className='container'>
            <button>
            <PiShoppingCartSimpleFill className='icon'/>
            </button>
        </div>
    )
}

export default Cartwidget
