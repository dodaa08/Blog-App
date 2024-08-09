import React, { useState } from 'react'
import DatabaseService from "../appwrite/conf"
import authservices from '../appwrite/auth'
import {Input,Button, Login, Logo} from "./index"
import { useDispatch } from 'react-redux'
import { set, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import {login as authlogin} from "../store/authSlice"
function Login() {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const {register, handleSubmit} = useForm(); 
   const [error, seterror] = useState(null);


   const login = async (data)=>{
       seterror("");
    try{
        const session = await DatabaseService.login(data);

        if(session){
            const userdata = await authservices.getuser()
            if(userdata) dispatch(authlogin(userdata));
            navigate("/")
        }
    }
    catch(error){
        seterror(error.message)
    }

   }

   return (
    <>
    <div>
        Login
    </div>
    </>
   )
}

export default Login
