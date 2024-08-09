
import { useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import authservices from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import {Header, Footer} from "./components"
import { Outlet } from 'react-router-dom'


function App() {

  const[loading, setloading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authservices.getuser()
    .then((Userdata)=>{
      if(Userdata){
        dispatch(login({Userdata}))
      }
      else{
        dispatch(logout())
      }
    })
    .catch((error)=>{
      console.log(error)
    })
    .finally(()=>{
      setloading(false)
    })
  },[])


    return !loading ? 
    <>
    <div className='min-h-screen text-black bg-grey-200'>
      <Header />
      <main>
      <Outlet />
      </main>
      <Footer />
    </div>
    </>
    : "";
}

export default App
