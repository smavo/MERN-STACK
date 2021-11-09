import React, { Fragment } from 'react'
import Tarea from './Tarea';

const ListadoTarea = () => {

    const tareasproyecto = [
        {nombre: 'Comprar Dominio', estado: true},
        {nombre: 'Subir archivos a repositorio', estado: false}

    ]

    return ( 
        <Fragment>
            <h2>Proyecto</h2>
            <ul className="listado-tareas">
            {tareasproyecto.length === 0 
                    ? (<li className="tarea"><p>No hay tareas</p></li>) 
                    : (<li>
                        {tareasproyecto.map(tareas => (
                       <Tarea props={tareas} />
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