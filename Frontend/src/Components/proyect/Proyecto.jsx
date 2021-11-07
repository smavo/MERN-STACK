import React from 'react'

const Proyecto = ({props}) => {
    return ( 
        <li>
            <a type="button" className="btn btn-blank" >{props.nombre}</a>
        </li>
     );
}
 
export default Proyecto;