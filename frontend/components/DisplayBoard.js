import React from 'react'

export const DisplayBoard = ({numberOfTasks, getAllTasks, deleteAllTasks}) => {
    
    return(
        <div className="display-board">
            <h4>Total Tasks</h4>
            <div className="number">
            {numberOfTasks}
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => getAllTasks()} className="btn btn-warning">Get all Tasks</button>
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => deleteAllTasks()} className="btn btn-warning">Delete all Tasks</button>
            </div>
        </div>
    )
}