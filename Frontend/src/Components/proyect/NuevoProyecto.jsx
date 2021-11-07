import React, { Fragment, useState} from 'react'

const NuevoProyecto = () => {

    // State para proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    // Extraer nombre de proyecto
    const { nombre} = proyecto;

    // Lee los contenidos del input
    const onchageProyecto = e =>{
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    // Cuando el usaurio envia un nuevo proyecto
    const onSubmitProyecto = e =>{
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
            <form className="mx-auto" onSubmit={onSubmitProyecto}>
                <input type="text"  className="input-text" placeholder="Nombre Proyecto" value={nombre} name="nombre" onChange={onchageProyecto}/>
                <input type="submit" className="btn btn-primario btn-block" value="Agregar Proyecto" />
            </form>
        </Fragment>
    );
}

export default NuevoProyecto;