import Modal from 'react-modal';
import React,{useState} from 'react';

const  ServiciosList= ({proyectos}) => {

    const id = 0
    const clickHandler = (ID) => {
        localStorage.setItem("ID",ID.idProyecto)
        localStorage.setItem("Fecha_Mora",ID.Fecha_Mora)   
        window.location.href="./Beneficiados";
        
      }
      
    return (  
        <div>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre Proyecto</th>
                    <th>Cantidad_Beneficiados</th>
                    <th>Fecha de moralidad</th>                 
                </tr>
            </thead>
            <tbody>
                {proyectos.map(proyectos => (
                     <tr key={proyectos.idProyecto}>
                     <td>{proyectos.idProyecto}</td>
                     <td>{proyectos.Nombre_Proyecto}</td>
                     <td>{proyectos.Cantidad_Beneficiados}</td>
                     <td>{proyectos.Fecha_Mora}</td>
                    
                     <td>
                          <div className = "mb-3">
                            <button  onClick={()=>clickHandler(proyectos)} className="btn btn-info">Usuarios</button>
                          </div>
                     </td>                 
                 
                 </tr>
                ))}
                   
               
                
            </tbody>
        </table>

        </div>
    );
}
 
export default ServiciosList;