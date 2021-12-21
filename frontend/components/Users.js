import React from 'react'

export const Users = ({tasks}) => {

    if (tasks.length === 0) return null
    console.log(tasks);

    const UserRow = (task,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{index + 1}</td>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
              </tr>
          )
    }

    const userTable = tasks.map((task,index) => UserRow(task,index))

    return(
        <div className="container">
            <h2>Users</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Task Id</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                    {userTable}
                </tbody>
            </table>
        </div>
    )
}