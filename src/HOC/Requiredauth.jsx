import React from 'react'
import { useContext } from 'react'
import {Navigate} from 'react-router-dom';
import { AuthContext2 } from '../context/Authcontext2';
const Requiredauth = ({children}) => {

    const {auth} = useContext(AuthContext2);
     
    if(!auth) return <Navigate to="/login"></Navigate>

    return children;
}

export default Requiredauth;