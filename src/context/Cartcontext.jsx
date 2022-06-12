import { createContext, useState } from "react";

export const Cartcontext = createContext();

export const Cartprovider = ({children}) =>{

    const [cart, setcart] = useState([]);

    return <Cartcontext.Provider value={{cart, setcart}}>{children}</Cartcontext.Provider>
}