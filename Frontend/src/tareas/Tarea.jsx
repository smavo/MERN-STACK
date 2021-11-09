import React from 'react'

const Tarea = ({props}) => {
    return ( 
        <li className="tarea sombra">
            <p>{props.nombre}</p>
            <div className="estado">
                {props.estado
                    ?  (
                        <button
                            type="button"
                            className="completo"
                       
                        >Completo</button>
                    )
                    :
                    (
                        <button
                            type="button"
                            className="incompleto"
                           
                        >Incompleto</button>
                    )
                }
            </div>

            <div className="acciones">
                <button 
                    type="button"
                    className="btn btn-primario"
              
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                  
                >Eliminar</button>
            </div>
        </li>
     );
}
 
export default Tarea;