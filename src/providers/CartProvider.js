"use client"
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext({
    carts: [],
    totalItems: 0,
    addToCart: (product) => { },
    deleteCartItem: (product) => { },
});

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const isLocalStorageAvailable = typeof localStorage !== "undefined";

    const storedCart = isLocalStorageAvailable
        ? localStorage.getItem("carts")
        : null;

    const [carts, setCarts] = useState(
        storedCart ? JSON.parse(storedCart) : []
    );
    const [totalItems, setTotalItems] = useState(0);
    useEffect(() => {
        if (isLocalStorageAvailable) {
            localStorage.setItem("carts", JSON.stringify(carts));
        }
        setTotalItems(carts.length);
    }, [carts, isLocalStorageAvailable]);

    const addToCart = (product) => {
        setCarts([...carts, product]);
        if (isLocalStorageAvailable) {
            localStorage.setItem("carts", JSON.stringify(carts));
        }
    };

    const deleteCartItem = (product) => {
        const updatedCarts = carts.filter(item => item !== product);
        setCarts(updatedCarts);
        if (isLocalStorageAvailable) {
            localStorage.setItem("carts", JSON.stringify(updatedCarts));
        }
    }

    return (
        <CartContext.Provider
            value={{
                carts,
                addToCart,
                totalItems,
                deleteCartItem
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
