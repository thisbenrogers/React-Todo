import React from 'react';
import uuid from 'react-uuid';

import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

import './app.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          name: 'First Todo',
          id: 1,
          completed: false
        },
        {
          name: 'Second Todo',
          id: 2,
          completed: false
        },
        {
          name: 'Completed Todo',
          id: 3,
          completed: true
        },
        {
          name: 'Select each todo to mark completed',
          id: 4,
          completed: false
        },
        {
          name: 'Click the clear completed button',
          id: 5,
          completed: false
        }
      ],
      task: ''
    }
  }

  componentDidUpdate() {
    localStorage.setItem('todo-store', JSON.stringify(this.state.tasks));
  }

  handleChanges = e => {
    console.log(`${e.target.name}: `, e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  };

  addTask = event => {
    event.preventDefault();
    const newTask = { name: this.state.task, completed: false, id: uuid() }
    this.setState({
      tasks: [...this.state.tasks, newTask],
      task: ''
    });
  };

  toggleTask = id => {
    this.setState(prevState => {
      return {
        tasks: prevState.tasks.map(task => {
          if (task.id === id) {
            return {
              ...task,
              completed: !task.completed
            };
          } else {
            return task;
          }
        })
      };
    });
  };

  clearCompleted = event => {
    event.preventDefault();
    let completed = this.state.tasks.filter(task => !task.completed);
    console.log("completed in clearCompleted: ", completed);
    this.setState({ tasks: completed });
  };


  render() {
    const local = JSON.parse(localStorage.getItem('todo-store'));
    return (
      <>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasks} toggleTask={this.toggleTask} />
        <TodoForm handleChanges={this.handleChanges} task={this.state.task} clearCompleted={this.clearCompleted} addTask={this.addTask} />
      </>
    );

  }
}

export default App;
