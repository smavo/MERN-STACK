import React, { useReducer } from 'react';

import ProyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

const ProyectoState = props => {

    const initialState = {
        formulario: true
    }

    // Dispath para ejecutar las acciones 
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    // Serie de funciones para el CRUD
    return (
        <ProyectoContext.Provider value={{
            formulario: state.formulario
        }}>
            {props.children}
        </ProyectoContext.Provider>
    )
}
 
export default ProyectoState;