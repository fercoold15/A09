import React from 'react'

const form = ({proyecto,setProyecto}) => {

    const handleChange = e => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    let{Nombre_Proyecto,Cantidad_Beneficiados,Fecha_Mora} = proyecto

    const handleSubmit = () =>{
        
        //Validacion de los datos
        if(Nombre_Proyecto === '' || Fecha_Mora===null ){
            alert('Todos los campos son obligatorios')
            return
        }

      const requestInit={
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(proyecto)
      }
      console.log(requestInit)
      fetch('http://localhost:9000/api/aggproyecto',requestInit)
      .then(res => res.json())
      

      //Limpiar State
      setProyecto({
        Nombre_Proyecto:'',
        Cantidad_Beneficiados:'',
        Fecha_Mora:null
      })
    }


    return (  
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="Proyecto" className="form-label">Nombre Proyecto</label>
                <input name="Nombre_Proyecto" onChange={handleChange} type="text" id="Proyecto" className="form-control"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="usuarios" className="form-label">Cantidad de Usuarios</label>
                <input name="Cantidad_Beneficiados" onChange={handleChange} type="Number" id="usuarios" className="form-control"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="fecha" className="form-label">Fecha de Pago</label>
                <input name="Fecha_Mora" onChange={handleChange} type="date" id="fecha" className="form-control"></input>
            </div>
            <button type="submit" className="btn btn-primary">Agregar Proyecto</button>
        </form>
    );
}
 
export default form;