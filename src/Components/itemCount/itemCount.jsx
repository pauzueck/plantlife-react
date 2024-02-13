import { useState } from 'react';
import './itemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    let [count, setCount] = useState(1);

const handlerSub = () => {
    if (count > initial) {
    setCount(count - 1);
    }
};

const handlerSum = () => {
    if (count < stock) {
    setCount(count + 1);
    }
};

return (
    <div className="itemCount">
    <div className="selector">
        <button className="btn btn-secondary-2" onClick={handlerSub}>-</button>
        <span className="text-center">{count}</span>
        <button className="btn btn-secondary-2" onClick={handlerSum}>+ </button>
    </div>
    <div>
    <button className="btn btn-primary" onClick={() => onAdd(count)}>Add to Cart</button>
    </div>
    </div>
);
};

export default ItemCount;