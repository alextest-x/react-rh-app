import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoEmpleados from "./empleados/ListadoEmpleados";
import Navegacion from "./plantilla/Navegacion";
import AgregarEmpleado from "./empleados/AgregarEmpleado";
import EditarEmpleado from  "./empleados/EditarEmpleado";
import BuscarEmpleado from  "./empleados/BuscarEmpleado";

function App() {
  return (
    
    <div className="container">
          
          <BrowserRouter>
              <Navegacion />
            <Routes>
              <Route exact path='/' element= {<ListadoEmpleados/> }/>
              <Route exact path='/agregar' element={<AgregarEmpleado/> }/>
              <Route exact path='/editar/:id' element={<EditarEmpleado/> }/>
              <Route exact path='/buscar/:id' element={<BuscarEmpleado/> }/>
              
            </Routes> 
          </BrowserRouter>

 
    </div>

  
  );
}

export default App;
