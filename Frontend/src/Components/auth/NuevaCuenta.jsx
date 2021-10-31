import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NuevaCuenta() {

    // State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    // extraer de usuario
    const { nombre, email, password, confirmar } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

    }

    return (
        <div className="antialiased overflow-hidden bg-gray-400 ">
            <div className="w-full h-screen max-w-lg mx-auto mt-32">
                <div className="bg-white rounded-lg shadow p-8">
                    <h1 className="text-2xl font-bold uppercase text-center">Obtener una cuenta</h1>
                    <form onSubmit={onSubmit} className="py-6" >
                        <div className="my-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Ingrese su Nombre
                            </label>
                            <input className="bg-gray-200 rounded shadow-inner w-full h-12 p-4 mb-4"
                                type="text" id="nombre" name="nombre" placeholder="Tu Nombre" value={nombre} onChange={onChange}
                            />
                        </div>

                        <div className="my-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Ingrese su Email
                            </label>
                            <input className="bg-gray-200 rounded shadow-inner w-full h-12 p-4 mb-4"
                                type="email" id="email" name="email" placeholder="Tu Email" value={email} onChange={onChange}
                            />
                        </div>

                        <div className="my-2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Ingrese su Contraseña
                            </label>
                            <input className="bg-gray-200 rounded shadow-inner w-full h-12 p-4 mb-4"
                                type="password" id="password" name="password" placeholder="Tu Password" value={password} onChange={onChange}
                            />
                        </div>

                        <div className="my-2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Repita su contraseña
                            </label>
                            <input className="bg-gray-200 rounded shadow-inner w-full h-12 p-4 mb-4"
                                type="password" id="confirmar" name="confirmar" placeholder="Repite tu Password" value={confirmar} onChange={onChange}
                            />
                        </div>

                        <div className="campo-form">
                            <input className="text-gray-900 bg-yellow-200 hover:bg-yellow-300 rounded-lg p-4 border block w-full font-bold cursor-pointer uppercase"
                                type="submit" value="Registrarme" />
                        </div>
                    </form>

                    <div className="text-gray-900 font-bold text-center">
                        <Link to={'/'} className="text-gray-900 text-base text-center font-bold">
                            Volver a Iniciar Sesión
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NuevaCuenta
