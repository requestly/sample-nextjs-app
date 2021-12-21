import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Header'
import { Users } from './Users'
import { DisplayBoard } from './DisplayBoard'
import { getAllTasks, createTask, deleteAllTasks } from '../services/UserService'
import { CreateUser } from './CreateUser'
class App extends Component {

  state = {
    task: {},
    tasks: [],
    numberOfTasks: 0
  }

  createTask = (e) => {
    console.log(this.state.task)
      createTask(this.state.task)
      this.setState({numberOfTasks: this.state.numberOfTasks + 1})
  }

  getAllTasks = () => {
    getAllTasks()
      .then(tasks => {
        this.setState({tasks: tasks, numberOfTasks: tasks.length})
      });
  }

  deleteAllTasks = () => {
    deleteAllTasks()
    .then(tasks => {
      this.setState({tasks: tasks, numberOfTasks: tasks.length})
    });
  }
  onChangeForm = (e) => {
      let t = this.state.task
      if (e.target.name === 'description') {
          t.description = e.target.value;
      } else if (e.target.name === 'title') {
          t.title = e.target.value;
      }
      this.setState({t})
  }

  render() {
    
    return (
      <div className="App">
        <Header></Header>
        <div className="container mrgnbtm">
          <div className="row">
            <div className="col-md-8">
                <CreateUser 
                  task={this.state.task}
                  onChangeForm={this.onChangeForm}
                  createTask={this.createTask}
                  >
                </CreateUser>
            </div>
            <div className="col-md-4">
                <DisplayBoard
                  numberOfTasks={this.state.numberOfTasks}
                  getAllTasks={this.getAllTasks}
                  deleteAllTasks={this.deleteAllTasks}
                >
                </DisplayBoard>
            </div>
          </div>
        </div>
        <div className="row mrgnbtm">
          <Users tasks={this.state.tasks}></Users>
        </div>
      </div>
    );
  }
}

export default App;