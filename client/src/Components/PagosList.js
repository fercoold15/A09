import Modal from 'react-modal';



const  PagosList= ({pagos}) => {

    return (  
        <div>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Fecha</th>
                    <th>Direccion Beneficiado</th>
                    <th>Nombre Proyecto</th>
                    

                                     
                </tr>
            </thead>
            <tbody>
                {pagos.map(pago => (
                     <tr key={pago.idPago}>
                        <td>{pago.idPago}</td>
                        <td>{pago.Fecha_Pago}</td>
                        <td>{pago.Direccion_Beneficiado}</td>
                        <td>{pago.Nombre_Proyecto}</td>
                    </tr>
                ))}
                   
               
                
            </tbody>
        </table>

        </div>
    );
}
 
export default PagosList;