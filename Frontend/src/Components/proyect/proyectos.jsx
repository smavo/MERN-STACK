import React from 'react'
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';

const Proyectos = () => {
    return (
        <div className="contenedor-app">
            
            <Sidebar/>
            <div className="seccion-principal">
            <Barra/>
            <main>
                <span >Proyectos</span>
            </main>
            </div>
        </div>
    );
}

export default Proyectos;