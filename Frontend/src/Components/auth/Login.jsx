import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Login() {

    // State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    // extraer de usuario
    const { email, password } = usuario;

    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    // Cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
             
                    <form onSubmit={onSubmit}>

                    <h1 >Iniciar Sesión</h1>
                        <div className="my-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Email
                            </label>
                            <input type="email" id="email"
                                className="bg-gray-200 rounded shadow-inner w-full h-12 p-4 mb-4"
                                name="email" placeholder="Tu Email" value={email} onChange={onChange} />
                        </div>

                        <div className="my-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Contraseña
                            </label>
                            <input
                                type="password" id="password"
                                className="bg-gray-200 rounded shadow-inner w-full h-12 p-4 mb-4"
                                name="password" placeholder="Tu Password" value={password} onChange={onChange} />
                        </div>

                        <div className="my-2">
                            <input type="submit" className="text-gray-900 bg-yellow-200 hover:bg-yellow-300 rounded-lg p-4 border block w-full font-bold cursor-pointer uppercase" value="Iniciar Sesión" />
                        </div>

                    </form>

                    <div className="text-gray-900 font-bold text-center">
                        <Link to={'/nueva-cuenta'}>
                            Obtener Cuenta
                        </Link>
                    </div>
                </div>
            
        </div>

    )
}

export default Login
