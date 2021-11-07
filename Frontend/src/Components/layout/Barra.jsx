import React from 'react'

const Barra = () => {
    return (
        <header className="app-header">

                    <p className="nombre-usuario">Hola <span className="font-bold">Sergio Villagomez </span></p>
                    <nav className="nav-principal">
                        <a href="#!" className="btn btn-blank cerrar-sesion">Cerrar Session</a>
                    </nav>
            
        </header>
    );
}

export default Barra;