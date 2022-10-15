import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import PagosList from "../Components/PagosList"

function Pagos() {

    const[pagos,setPagos]=useState([])

    useEffect(() => {
        const id = localStorage.getItem("IDB")
        console.log(id)
        const getPagos = () => {
          fetch('http://localhost:9000/api/obtenerPagos/'+id)
          .then(res => res.json())
          .then(res => setPagos(res))
        }
        getPagos();
        console.log(pagos);
      }, [])

  return (
    <div>
      <Navbar brand='Servicios de Agua'/>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2>Lista de Pagos</h2>
            <PagosList pagos={pagos}/>

          </div>

        </div>

      </div>
      </div>
    
  )
}

export default Pagos;