import React from 'react'


const Proyecto = ({props}) => {
    return ( 
        <li>
            <button type="button" className=""><span className="font-semibold text-gray-500">{props.nombre}</span></button>
        </li>
     );
}
 
export default Proyecto;