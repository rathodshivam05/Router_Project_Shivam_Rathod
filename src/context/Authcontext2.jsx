import { useState } from "react";
import { createContext } from "react";
import axios from 'axios';

export const AuthContext2 = createContext();

export const AuthProvider2 = ({children}) =>{
    const [auth, setauth] = useState(false);
  const [token, settoken] = useState("");

  const getToken =(email,pass)=>{
    axios
    .post("https://reqres.in/api/login", {      
      email: email,
      password: pass,
    })
    .then((r)=>{
        console.log(r);
        settoken(r.data.token);
    })

  }

    return <AuthContext2.Provider value={{ auth ,token, settoken, getToken, setauth}}>{children}</AuthContext2.Provider>
}