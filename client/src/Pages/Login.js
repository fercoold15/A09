import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { cleanData, getUserData, removeUserData, setUserData } from '../Components/Authhelper'

function Login() {
  const useNavegar = useNavigate()

  const[user, setUser]=useState({
    Contraseña:'',
  })
  const Redirecto=()=>{
    useNavegar("./Proyectos")
  }

  const handleChange=e=>{
    setUser({
      ...user,
      [e.target.name]: e.target.value
  })
  }

  const handleSubmit=e=>{
    e.preventDefault()
  const requestInit={
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  }
  fetch('http://localhost:9000/api/login',requestInit)
  .then(res => res.json())
  .then(res => {
    if(res[0]!==null){
      setUserData(res[0])
      Redirecto()
    }else{

    }
    
    
  })
  .catch()

  setUser({
    Nombre_Usuario:'',
    Contraseña:'',
  })

  }
  useEffect(()=>{
    const getUser=getUserData()
    if(getUser)
        Redirecto()
    else
      removeUserData()
        
},[])
  return (
    <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Nombre Proyecto</label>
                <input name="Nombre_Usuario" type="text" id="Nombre_Usuario" className="form-control"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="Contraseña" className="form-label">Cantidad de Usuarios</label>
                <input name="Contraseña" onChange={handleChange} type="text" id="Contraseña" className="form-control"></input>
            </div>
            <button type="submit" className="btn btn-primary">Iniciar Sesion</button>
        </form>
  )
}

export default Login
