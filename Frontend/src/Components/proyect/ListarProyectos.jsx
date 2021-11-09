import React, { useContext, useEffect } from 'react'
import Proyecto from './Proyecto';
import ProyectoContext from '../../context/proyectos/proyectoContext'

const ListarProyecto = () => {

    // Extraer proyectos de State Inicial
    const proyectosContext = useContext(ProyectoContext)
    const { proyectos, obtenerProyectos } = proyectosContext

    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerProyectos();
    }, [])

    // Revisar si tiene contenido
    if(proyectos.length === 0) return <p>No hay Proyectos, comienza agregando uno.</p>;

    return (  
        <ul className="listado-proyectos">
      
           {proyectos.map(proyecto => (
                <Proyecto props={proyecto} key={proyecto.id} />
            ))}

        </ul>
    );
}
 
export default ListarProyecto;