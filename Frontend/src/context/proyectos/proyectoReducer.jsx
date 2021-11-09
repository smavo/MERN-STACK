import { FORMULARIO_PROYECTO } from '../../types'

export default (state, action) => {
    switch(action.type) {
        case FORMULARIO_PROYECTO:
            return {
                ...state,
                formulario: true
            }
        case FORMULARIO_PROYECTO:
            return {
                ...state,
                proyectos: action.payload
            }
        default:
            return state;
    }
}

