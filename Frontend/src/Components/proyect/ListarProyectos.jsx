import React, { useContext } from 'react'
import Proyecto from './Proyecto';
import ProyectoContext from '../../context/proyectos/proyectoContext'

const ListarProyecto = () => {

    
    // Extraer proyectos de State Inicial
    const proyectosContext = useContext(ProyectoContext)
    const { proyectos } = proyectosContext

    // Revisar si hay  proyectos
    if(proyectos.length === 0) return null;

    return (  
        <ul className="listado-proyectos">
      
           {proyectos.map(proyecto => (
                <Proyecto props={proyecto} key={proyecto.id} />
            ))}

        </ul>
    );
}
 
export default ListarProyecto;