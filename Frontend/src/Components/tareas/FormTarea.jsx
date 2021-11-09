import React, {useContext} from 'react'
import ProyectoContext from '../../context/proyectos/proyectoContext';

const FormTarea = () => {

    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(ProyectoContext)
    const { proyecto } = proyectosContext

    // Si no hay proyecto seleccionado
    if(!proyecto) return null

    // Array destructuring para extraer el proyecto actual
    const [ proyectoActual] = proyecto;

    return ( 
        <div className="formulario">
            <form action="">
                <div className="contenedor-input">
                    <input type="text" className="input-text" 
                    placeholder="Nombre Tarea..."
                    name="nombre"
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        
                    />
                </div>
            </form>
        </div>
     );
}
 
export default FormTarea;