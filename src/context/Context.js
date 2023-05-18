import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Context = createContext(null);
export const ContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const values = {
        data,
        setData,
    };
    
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then(({ data }) => setData(data))
    }, [])
    return <Context.Provider value={values}>{children}</Context.Provider>;
};

