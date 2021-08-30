import React from 'react';
import Task from './Task';

const TaskList = (props) => {

    let activeTask = props.task.filter(task => task.active === true);
    activeTask = activeTask.map(task =>(
        <Task task={task} key={task.id} delete={props.delete} done={props.done} doneDate ={props.doneDate}/>
    ));
    
    let doneTask = props.task.filter(task => task.active === false);
    doneTask = doneTask.map(task =>(
        <Task task={task} key={task.id} delete={props.delete} undo={props.undo} doneDate ={props.doneDate} />
    ));
    

    const style  = {
        textAlign: "center",
        fontSize: "30px",
        fontWeight: "bold"
    }
    let active = activeTask.length !==0 ? activeTask : <div style={style}>No more active tasks</div> 
    let done = doneTask.length !==0 ? doneTask : <div style={style}>There is no done tasks</div> 

    return (
        <>
        <ul className="task_list">
        <h1>Active Tasks : </h1>
            {props.isLoaded? active : <div style={style}>Loading...</div> }
        </ul> 
        <ul className="task_list">
            <h1>Done Tasks : </h1>
                {props.isLoaded? done : <div style={style}>Loading...</div> }
         </ul> 
         </>
    );
}
 
export default TaskList;