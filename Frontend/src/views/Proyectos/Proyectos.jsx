import React from 'react';


import Forms from 'components/Cards/Forms';

function Proyectos() {
    return (
        <div className="flex flex-wrap">
            {/*<div className="w-full  mb-12 xl:mb-0 px-4">
                <CardProfile />
            </div>*/}

            <div className="w-full xl:w-12 px-4">  {/* w-full xl:w-6/12 px-4 */}
                <Forms />
            </div>
        </div>
    )
}

export default Proyectos
