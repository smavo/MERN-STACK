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
            <button className="mt-6 bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-bold"
                type="button"

            >Nuevo Proyecto</button>
            <form action="" className="mx-auto" onSubmit={onSubmitProyecto}>
                <input type="text"  className="my-2 bg-gray-200 rounded-md w-full" 
                placeholder="Nombre Proyecto" value={nombre} 
                name="nombre" onChange={onchageProyecto}/>
                <input type="submit" className="my-1 bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-bold w-full" 
                value="Agregar Proyecto" />
            </form>
        </Fragment>
    );
}

export default NuevoProyecto;