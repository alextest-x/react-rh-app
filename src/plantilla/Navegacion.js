import React from 'react'
import { Link } from 'react-router-dom'

export default function Navegacion() {
  return (

    <div className="container">
        

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">

    <a className="navbar-brand" href="/">Sistema de Recursos Humanos</a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
        <Link className="nav-link" to="/agregar">Agregar Empleado</Link>
        <Link className="nav-link" to="/listar">Listar Empleados</Link>
        <Link className="nav-link" to="/buscar">Buscar Empleado</Link>
        <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
      </div>
    </div>
  </div>
</nav>

</div>

  )
}
