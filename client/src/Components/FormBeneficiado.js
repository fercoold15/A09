import React from 'react'

const form = ({Beneficiado,setBeneficiado}) => {

    const handleChange = e => {
        setBeneficiado({
            ...Beneficiado,
            [e.target.name]: e.target.value
        })
    }

    let{Direccion_Beneficiado,Fecha_Inicio,Fecha_Fin} = Beneficiado

    const handleSubmit = () =>{
        
        //Validacion de los datos
        if(Direccion_Beneficiado === '' || Fecha_Inicio===null || Fecha_Fin===null){
            alert('Todos los campos son obligatorios')
            return
        }

      const requestInit={
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(Beneficiado)
      }
      console.log(requestInit)
      fetch('http://localhost:9000/api/aggbeneficiado',requestInit)
      .then(res => res.json())
      

      //Limpiar State
      setBeneficiado({
        Nombre_Beneficiado:'',
        Cantidad_Beneficiados:'',
        Fecha_Mora:null
      })
    }


    return (  
        <form onSubmit={handleSubmit} >
            <div className="mb-3">
                <label htmlFor="Beneficiado" className="form-label">Nombre Beneficiado</label>
                <input name="Direccion_Beneficiado" onChange={handleChange} type="text" id="Beneficiado" className="form-control"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="fecha" className="form-label">Fecha de Inicio</label>
                <input name="Fecha_Inicio" onChange={handleChange} type="date" id="fecha" className="form-control"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="fecha" className="form-label">Fecha de Fin</label>
                <input name="Fecha_Fin" onChange={handleChange} type="date" id="fecha" className="form-control"></input>
            </div>
            <button type="submit" className="btn btn-primary">Agregar Beneficiado</button>
        </form>
    );
}
 
export default form;