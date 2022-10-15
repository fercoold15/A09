import React,{Fragment,useState,useEffect} from 'react';
import Navbar from '../Components/Navbar'
import ServiciosList from '../Components/ServiciosList';
import FormProyecto from '../Components/FormProyecto';

function Proyectos() {

  const[proyectos,setProyectos]=useState([])

  const[proyecto, setProyecto]=useState({
    Nombre_Proyecto:'',
    Cantidad_Beneficiados:'',
    Fecha_Mora:'',
    Usuario_idUsuario:1
  })

  useEffect(() => {
    const getProyectos = () => {
      fetch('http://localhost:9000/api/proyectos')
      .then(res => res.json())
      .then(res => setProyectos(res))
    }
    getProyectos();
  }, [])
  

  
  return (
    <Fragment>
      <Navbar brand='Servicios de Agua'/>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2>Lista de Proyectos</h2>
            <ServiciosList proyectos={proyectos}/>

          </div>
          <div className="col-5">
          <h2>Nuevo Proyecto</h2>
            <FormProyecto proyecto={proyecto} setProyecto={setProyecto}></FormProyecto>
          </div>

        </div>

      </div>
    </Fragment>
  );
}

export default Proyectos;
