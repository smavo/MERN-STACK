import React, { useReducer } from 'react';

import ProyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from '../../types';



const ProyectoState = props => {

    const proyectos = [
        {id: 1, nombre: 'Tienda Virtual'},
        {id: 2, nombre: 'Contenedores en Docker'}
    ]

    const initialState = {
        proyectos: [ ],
        formulario: false
    }

    // Dispath para ejecutar las acciones 
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    // Serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // Obtener los proyectos
    const obtenerProyectos = () => {
        dispatch ({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    return (
        <ProyectoContext.Provider 
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerProyectos
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )
}
 
export default ProyectoState;