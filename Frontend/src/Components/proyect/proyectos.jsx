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
                <h4>Proyectos</h4>
            </main>
            </div>
        </div>
    );
}

export default Proyectos;