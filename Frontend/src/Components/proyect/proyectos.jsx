import React, { Fragment } from 'react'
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';

const Proyectos = () => {
    return (
        <Fragment>

            <Sidebar className="bg-gray-500" />

            <div className="">
                <Barra className="" />
                <main className="flex justify-center my-2">
                    <span className="text-4xl font-semibold">Proyectos</span>
                </main>
            </div>

        </Fragment>
    );
}

export default Proyectos;