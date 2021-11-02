import React, { Fragment } from 'react'
import Sidebar from '../layout/Sidebar';

const Proyectos = () => {
    return (
        <Fragment>
            <Sidebar className="bg-gray-50"/>
            <div className="flex">
                <div className="flex justify-center my-2">
                    <span className="text-4xl font-semibold">Proyectos</span>
                </div>
            </div>

        </Fragment>
    );
}

export default Proyectos;