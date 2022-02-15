import React from 'react';
import './Inputs.css'

function Inputs() {
    return (
        <div id="input-container">
           <input type="text" placeholder="Task" />
           <input type="text" placeholder="Notes (optional)" />
           <select name="priority" id="priority">
                <option value="" selected disabled hidden >Select Priority</option>
                <option value="High" id="High">High</option>
                <option value="Medium" id="medium">Medium</option>
                <option value="Low" id="low">Low</option>
           </select>
           <button id="submitBtn">Add Task</button>
        </div>
    )
}

export default Inputs;