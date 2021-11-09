import React, { Fragment, useState, useContext } from 'react'
import ProyectoContext from '../../context/proyectos/proyectoContext'

const NuevoProyecto = () => {

    // Obtener el state del formulario
    const proyectosContext = useContext(ProyectoContext)
    const { formulario } = proyectosContext

    // State para proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    // Extraer nombre de proyecto
    const { nombre } = proyecto;

    // Lee los contenidos del input
    const onchageProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    // Cuando el usaurio envia un nuevo proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();

        // Validar el proyecto

        // Agregar al state

        // Reiniciar el Form
    }

    return (
        <Fragment>
            <button className="btn btn-block btn-primario"
                type="button"
            >Nuevo Proyecto</button>
            {formulario
                ? (
                    <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
                        <input type="text" className="input-text" placeholder="Nombre Proyecto" value={nombre} name="nombre" onChange={onchageProyecto} />
                        <input type="submit" className="btn btn-primario btn-block" value="Agregar Proyecto" />
                    </form>
                )
                : null
            }
        </Fragment>
    );
}

export default NuevoProyecto;