import React from 'react'
import { useDispatch } from 'react-redux'
import authservices from '../../appwrite/auth'


function Logoutbtn() {
    const dispatch = useDispatch()
    const logouthandler = ()=>{
        authservices.logout().then(()=>{
            dispatch(logout())
        }).catch((error)=>{
            console.log(error)
        })
    }
    
    return <>
    <button className='bg-black w-20 h-6 py-6 inline-block rounded-xl'>Logout</button>
        </>
    
    


}

export default Logoutbtn
