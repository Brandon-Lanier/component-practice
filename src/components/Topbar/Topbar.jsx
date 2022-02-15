import React from 'react';
import './Topbar.css'
import Inputs from '../Inputs/Inputs'
import Activecounter from '../Activecounter/Activecounter';
import Completecounter from '../Completecounter/Completecounter'

function Topbar() {
    return (
        <div className="topbar">
            <Inputs />
            <Activecounter />
            <Completecounter />
        </div>
    )
}

export default Topbar;