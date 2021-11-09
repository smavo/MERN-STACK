import React, { Fragment, useContext } from 'react'
import Tarea from './Tarea';
import ProyectoContext from '../../context/proyectos/proyectoContext';

const ListadoTarea = () => {

    // Extraer proyectos de State Inicial
    const proyectosContext = useContext(ProyectoContext)
    const { proyecto } = proyectosContext

    // Si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>

    // Array destructuring para extraer el proyecto actual
    const [ proyectoActual] = proyecto;

    const tareasproyecto = [
        {id: 1, nombre: 'Comprar Dominio', estado: true},
        {id: 2, nombre: 'Subir archivos a repositorio', estado: false},
        {id: 3, nombre: 'Deploy Proyecto', estado: true},
        {id: 4, nombre: 'Refactorizacion de Codigo', estado: false}
    ]

    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
            {tareasproyecto.length === 0 
                    ? (<li className="tarea"><p>No hay tareas</p></li>) 
                    : (<li>
                        {tareasproyecto.map(tareas => (
                       <Tarea props={tareas} key={tareas.id} />
                    ))} 
                    </li>)
                }
         
            </ul>

            <button     
                type="button"
                className="btn btn-eliminar"
                
            >Eliminar Proyecto &times;</button>

        </Fragment>
     );
}
 
export default ListadoTarea;