import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import Proyectos from "../Pages/Proyectos"
import Beneficiados from "../Pages/Beneficiados"
import Login from "../Pages/Login";
import ProtectedRoutes from "../Components/ProtectedRoutes";
import Pagos from "../Pages/Pagos";

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes/>} >
            <Route path="/Beneficiados" element={<Beneficiados/>}/>
            <Route path="/Proyectos" element={<Proyectos/>}/>
            <Route path="/Pagos" element={<Pagos/>}/>
          </Route>
      
          <Route path="/" element={<Login/>}/>
            
          
      </Routes>
    </BrowserRouter>
  )
}