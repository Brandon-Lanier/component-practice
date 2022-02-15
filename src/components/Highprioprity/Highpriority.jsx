import React from 'react';
import './Highpriority.css';
import Hightask from '../Hightask/Hightask'

function Highpriority() {
    return (
        <div className="task-container">
            <div className="high-title">
                <h3>High Priority</h3>
            </div>
            <div className="task-box">
                <Hightask />
                <Hightask />
                <Hightask />
            </div>
        </div>
    )
}

export default Highpriority;