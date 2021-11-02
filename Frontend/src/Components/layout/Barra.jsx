import React from 'react'

const Barra = () => {
    return (
        <div className="relative md:ml-64 bg-blueGray-100">
            <div className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center pt-0">
                <header className="w-full bg-green-500 flex py-2 flex justify-between  px-2">
                    <p className="text-black text-xl pl-5">Hola <span className="font-bold">Sergio Villagomez </span></p>
                    <nav>
                        <a href="#!" className="text-black text-xl font-bold px-3">Cerrar Session</a>
                    </nav>
                </header>
            </div>
        </div>
    );
}

export default Barra;