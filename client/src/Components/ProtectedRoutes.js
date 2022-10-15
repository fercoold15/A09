import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { getUserData } from './Authhelper'

export default function ProtectedRoutes() {

  const verficatedAuth = ()=>{
    let isLogged = false
    const getuser = getUserData()
     if(getuser != undefined || getuser != null){
        isLogged = true
     }
        
        

    return isLogged
}

  if(verficatedAuth()){
    return (
        <>
            
            <div className='container'>
                <Outlet/>
            </div>
        </>
    )
}else{
    return <Navigate to="/"/>
}
}
