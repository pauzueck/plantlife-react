import { createContext, useEffect, useState } from "react";

export const cartContext = createContext();

const startingCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(startingCart);

    const handleAddToCart = (quantity) => {
        const itemAdded = { ...plant, quantity };

        const newCart = [...cart];
        const inCart = cart.find((plant) => plant.id === itemAdded.id);

        if (inCart) {
            inCart.quantity = inCart.quantity + quantity;
            setCart(newCart);
        } else {
            setCart( [...cart, itemAdded]);
        }

        setCart([...cart, itemAdded]);

    }

    const qtyPlants = () => {
        return cart.reduce((acc, plant) => acc + plant.quantity, 0);
    }

    const totalPrice = () => {
        return cart.reduce((acc, plant) => acc + plant.price * plant.quantity, 0)
    }

    const emptyCart = () => {
        setCart([]);
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return (
        <cartContext.Provider value={ {
            cart, 
            setCart, 
            qtyPlants, 
            totalPrice, 
            emptyCart, 
            handleAddToCart }}>
            {children}
        </cartContext.Provider>
    )
}
