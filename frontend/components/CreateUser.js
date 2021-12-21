import React from 'react'


export const CreateUser = ({onChangeForm, createTask }) => {


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2>Add Task</h2>
                <form>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label htmlFor="exampleInputEmail1">Title</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="title" id="title" aria-describedby="emailHelp" placeholder="Title" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label htmlFor="exampleInputEmail1">Description</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="description" id="description" aria-describedby="emailHelp" placeholder="Description" />
                        </div>
                    </div>
                    <button type="button" onClick= {(e) => createTask(e)} className="btn btn-danger">Create</button>
                </form>
                </div>
            </div>
        </div>
    )
}
