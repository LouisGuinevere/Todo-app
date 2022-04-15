import React from 'react'
import Task from "./Task"

const TaskList = (props) => {
    const {toDoList, onRemoveTask, onUpdateTask, onSelectingTask} = props;
    return (
        <div className="task-list">
            { 
                toDoList?.map(task => <Task key={task.id} task={task} onRemoveTask={onRemoveTask} onUpdateTask={onUpdateTask} onSelectingTask={onSelectingTask} />)
            }
        </div>
    )
}

export default TaskList;