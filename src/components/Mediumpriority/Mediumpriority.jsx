import React from 'react';
import './Mediumpriority.css';
import Mediumtask from '../Mediumtask/Mediumtask'

function Mediumpriority() {
    return (
        <div className="task-container">
            <div className="high-title">
                <h3>Medium Priority</h3>
            </div>
            <div className="task-box">
              <Mediumtask />
            </div>
        </div>
    )
}

export default Mediumpriority;