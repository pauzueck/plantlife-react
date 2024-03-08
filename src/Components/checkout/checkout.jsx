import React, { useContext, useState } from 'react'
import { cartContext } from '../../context/cartContext';
import { useForm } from "react-hook-form";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../main';
import { Link } from 'react-router-dom';
import './checkout.css';


const Checkout = () => {

  const [orderId, setOrderId] = useState ("");

  const { cart, totalPrice, emptyCart } = useContext(cartContext);

  const { register, handleSubmit } = useForm();

    const completeCheckout = (data) => {
        const newOrder = {
          customer: data,
          plants: cart,
          total: totalPrice()
        }
        console.log(newOrder);

        const orderRef = collection(db, "orders");

        addDoc(orderRef, newOrder)
          .then((doc) => {
            setOrderId(doc.id);
          })
    }

    if (orderId) {
      return (
        <div className='thankyouCont'>
          <h1 className='thankyou'>Thank you for Shopping in PlantLife!</h1>
          <p>Order Id: {orderId}</p>
          <Link to="/" className="btn btn-secondary">Return Home</Link>
        </div>
      )
    }

  return (
    <div className='form'>
            
        <h1 className="main-title">Complete Checkout</h1>
        <form className="formCheckout" onSubmit={handleSubmit(completeCheckout)}>

            <input type="text" placeholder="Full Name" {...register("name")} />
            <input type="email" placeholder="Email" {...register("email")} />
            <input type="phone" placeholder="Phone Number" {...register("phone")} />
            <input type="text" placeholder="Address" className="address-input" {...register("address")} />


            <button className="completeCheckout" type="submit">Checkout</button>

        </form>
    
  </div>
  )
  };
  
  export default Checkout;
  