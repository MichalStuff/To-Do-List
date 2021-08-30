import React from 'react'

const Task = (props) => {
    const {id, text, date, active, doneDate} = props.task;
    return ( 
        <li className="task" key={id}>
            <div className="display">
                <h1>{text}</h1>
                <p><strong>Started : </strong>{date}</p>
                {active === false && <p><strong>Done : </strong><em>{doneDate}</em></p>}
            </div>

            <div className="delete" onClick={()=>{props.delete(id)}}>
                <i className="fas fa-trash" ></i>
            </div>
            {active ===true ? 
                <div className="done" onClick={()=>{props.done(id)}}>
                    <i className="fas fa-check"></i>
                </div> :
                <div className="redo" onClick={()=>{props.undo(id)}}>
                <i className="fas fa-undo"></i>
                </div> }
            
        </li>
     );
}
 
export default Task;