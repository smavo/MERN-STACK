import React from 'react'
import NuevoProyecto from '../proyect/NuevoProyecto';
import ListarProyecto from '../proyect/ListarProyectos';

const Sidebar = () => {
    return (
        <aside>
            <h1> MERN <span className="italic text-green-400">Task</span> </h1>
            <NuevoProyecto />
            <div className="proyectos">
                <h2>Tus Proyectos</h2>
                <ListarProyecto />
            </div>
        </aside>

    );
}

export default Sidebar;