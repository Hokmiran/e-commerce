import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Context = createContext(null);
export const ContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct) {
            setCart((prevCart) =>
                prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        } else {
            setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart];
            const index = updatedCart.findIndex((product) => product.id === productId);

            if (index !== -1) {
                if (updatedCart[index].quantity > 1) {
                    updatedCart[index].quantity--;
                } else {
                    updatedCart.splice(index, 1);
                }
            }

            return updatedCart;
        });
    };
    useEffect(() => {

        const savedCart = localStorage.getItem("cart");
        const initialCart = savedCart ? JSON.parse(savedCart) : [];
        setCart(initialCart);

        axios.get("https://fakestoreapi.com/products").then(({ data }) => setData(data));

    }, []);

    useEffect(() => {

        localStorage.setItem("cart", JSON.stringify(cart));

    }, [cart]);

    const values = {
        data,
        setData,
        cart,
        addToCart,
        removeFromCart
    };

    return <Context.Provider value={values}>{children}</Context.Provider>;
};

