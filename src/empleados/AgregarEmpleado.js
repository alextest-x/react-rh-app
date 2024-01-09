import axios from 'axios';
import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';



export default function AgregarEmpleado() {

   let navegacion = useNavigate();

  
    //relacionamos los atributos con el formulario para lo envie al backend
    //lo actualiza
    const [empleado, setEmpleado]= useState({
        nombre:"",
        departamento:"",
        sueldo:""
    });

    const{ nombre, departamento, sueldo}= empleado;
    //mandamos los atributos al value del formulario = objeto de empleado 
    //donde asignamos a emplado los atributos de las propiedades nombre, departamento, suledo
    //que vamos asociar con cada uno de los elementos del formulario

    //definimos al metodo del evento Onchange
    const onInputChange = (e) =>{
       //spread operator para expandir los atributos del objeto empleado
       //agregamos el hook setEmpleado para que revise cada propiedad
       //recuperamos el elemento e.target.name y el valor con e.target.value
       //cuando es igual al atributo de name con el objeto de empleado 
       //se reestablece su valor cuando cambia el evento Onchange
       setEmpleado({...empleado, [e.target.name]: e.target.value });
    }

     // para comunicarnos con el backend 
     // e.preventDefault(); para evitar que los parametros se pongan en el url
     // y sean parte del cuerpo del envio del formulario
     //(e) es el evento que lanzo el formulario
        const onSubmit = async (e) => {
          e.preventDefault();
          const urlBase ="http://localhost:8080/rh-app/empleados";
          await axios.post(urlBase, empleado);
          //redigimos al pagina de inicio
          navegacion('/');
        }


  return (
  

    <div className="container">
        <div className="container text-center" style={{margin: "30px"}} >
             <h3>Agregar Empleado</h3>
        </div>
        

    <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="nombre" name="nombre" required={true}
            value={nombre} onChange={ (e)=> onInputChange(e)} />
           
        </div>


        <div className="mb-3">
            <label htmlFor="departamento" className="form-label">Departamento</label>
            <input type="text" className="form-control" id="departamento" name="departamento"
            value={departamento} onChange={ (e)=> onInputChange(e)}
            />
        </div>


        <div className="mb-3">
            <label htmlFor="sueldo" className="form-label">Sueldo</label>
            <input type="number" step="any"  className="form-control" id="sueldo" name="sueldo"
            value={sueldo} onChange={ (e)=> onInputChange(e)}
            />
           
         
        </div>
             
        <div className="container text-center">
           <button type="submit" className="btn btn-warning btn-sm me-3">Agregar</button>

            <a href='/' className="btn btn-danger btn-sm me-3 "> Regresar </a> 
        </div>

       
    </form>


   
    </div>







        


  )
}
