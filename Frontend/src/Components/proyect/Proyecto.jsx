import React, { useContext } from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';

const Proyecto = ({ props }) => {

    // Extraer proyectos de state inicial
    const proyectosContext = useContext(ProyectoContext)
    const { proyectoActual } = proyectosContext

    return (
        <li>
            <button type="button" className="btn btn-blank" 
                onClick={() => proyectoActual(props.id)}>
                {props.nombre}
            </button>
        </li>
    );
}

export default Proyecto;