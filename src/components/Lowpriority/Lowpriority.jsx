import React from 'react';
import './Lowpriority.css'
import Lowtask from '../Lowtask/Lowtask'

function Lowpriority() {
    return (
        <div className="task-container">
            <div className="high-title">
                <h3>Low Priority</h3>
            </div>
            <div className="task-box">
             <Lowtask />
            </div>
        </div>
    )
}

export default Lowpriority;