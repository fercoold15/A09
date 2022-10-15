import React,{Fragment,useState,useEffect} from 'react';
import Navbar from '../Components/Navbar'
import BeneficiadosList from '../Components/BeneficiadosList';
import FormBeneficiado from '../Components/FormBeneficiado';

function Beneficiados() {

  const[Beneficiados,setBeneficiados]=useState([])

  const[Beneficiado, setBeneficiado]=useState({
    Direccion_Beneficiado:'',
    Fecha_Inicio:'',
    Fecha_Fin:'',
    UltimoPago:'',
    Proyecto_idProyecto:localStorage.getItem("ID"),
    Usuario_idUsuario:1
  })

 
  useEffect(() => {
    const id = localStorage.getItem("ID")
    const getBeneficiados = () => {
      fetch('http://localhost:9000/api/beneficiados/'+id)
      .then(res => res.json())
      .then(res => setBeneficiados(res))
    }
    const updateEstados =()=>{


    }
    getBeneficiados();
    updateEstados();
  }, [])



  
  return (
    <div>
      <Navbar brand='Servicios de Agua'/>
      <div className="container">
      <div className="col-5">
          <h2>Nuevo Beneficiado</h2>
            <FormBeneficiado Beneficiado={Beneficiado} setBeneficiado={setBeneficiado}></FormBeneficiado>
          </div>
          <div className="col-7">
            <h2>Lista de Beneficiados</h2>
            <h2>Fecha de Pago : {localStorage.getItem("Fecha_Mora")}</h2>
            <BeneficiadosList Beneficiados={Beneficiados}/>
      </div>
         

        
    



      </div>
      
      </div>
  );
}

export default Beneficiados;
