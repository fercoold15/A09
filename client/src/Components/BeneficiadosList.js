import Modal from 'react-modal';
import React,{useState,useEffect} from 'react';
import { json, useLinkClickHandler } from 'react-router-dom';

const  BeneficiadosList= ({Beneficiados}) => {

    var date = new Date();
        const formatDate = (date)=>{
    let formatted_date =  date.getFullYear()+ "-" + (date.getMonth() + 1) +"-"+date.getDate() 
     return formatted_date;
    }
    console.log(formatDate(date));

    
    const clickHandler = (Beneficiados) => {
        var today = new Date();
        const pago={Fecha_Pago: today ,Beneficiado_idBeneficiado: Beneficiados.idBeneficiado}

        const requestInit={
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(pago)
          }

          console.log(requestInit)
          fetch('http://localhost:9000/api/registrarPago',requestInit)
          .then(res => res.json())
          
          const requestInit2={
            method:'PUT',
            headers:{'Content-Type': 'application/json'}
          }
          
            fetch('http://localhost:9000/api/actualizarPago/'+formatDate(date)+"/"+Beneficiados.idBeneficiado,requestInit2)
            .then(res => res.json())
            

            window.location.href("/Beneficiados")    
    }

    const clickHandlerPagos = (Beneficiados) => {
        localStorage.setItem("IDB",Beneficiados.idBeneficiado)
        console.log(localStorage.getItem("IDB"))
        window.location.href="./Pagos";

    }
       

    return (  
        <div>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Direccion Beneficiado</th>
                    <th>Fecha Inicio</th>
                    <th>Fecha Fin</th>
                    <th>UltimoPago</th>
                    <th>Proyecto</th>
                                     
                </tr>
            </thead>
            <tbody>
                {Beneficiados.map(Beneficiados => (
                     <tr key={Beneficiados.idBeneficiado}>
                     <td>{Beneficiados.idBeneficiado}</td>
                     <td>{Beneficiados.Direccion_Beneficiado}</td>
                     <td>{Beneficiados.Fecha_Inicio}</td>
                     <td>{Beneficiados.Fecha_Fin}</td>
                     <td>{Beneficiados.UltimoPago}</td>
                     <td>{Beneficiados.Nombre_Proyecto}</td>
                     <td>
                          <div className = "mb-3">
                            <button  onClick={()=>clickHandler(Beneficiados)}className="btn btn-success">Pagar</button>
                          </div>
                     </td>
                     <td>
                          <div className = "mb-3">
                            <button  onClick={()=>clickHandlerPagos(Beneficiados)}className="btn btn-success">Pagos</button>
                          </div>
                     </td>

                 </tr>
                ))}
 
            </tbody>
        </table>

        </div>
    );
}
 
export default BeneficiadosList;