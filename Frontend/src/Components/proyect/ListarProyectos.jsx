import React from 'react'
import Proyecto from './Proyecto';

const ListarProyecto = () => {

    const proyectos = [
        {nombre: 'Tienda Virtual'},
        {nombre: 'Contenedores en Docker'}

    ]

    return (  
        <ul className="">
            {proyectos.map(proyecto => (
                <Proyecto props={proyecto} />
            ))}
        </ul>
    );
}
 
export default ListarProyecto;