import React from 'react';
import uuid from 'react-uuid';

import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const tasks = [
  {
    task: '',
    id: null,
    complete: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks
    }
  }

  toggleTask = id => {
    // loop through this.state.groceries
    // find the item I clicked on
    // toggle the purchased property
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

  addTask = taskName => {
    const newTask = {
      name: taskName,
      // TODO change Date.now to uuid
      id: uuid(),
      completed: false
    };
    this.setState(prevState => {
      return {
        tasks: [...prevState.tasks, newTask]
      };
    });
  };

  clearCompleted = event => {
    event.preventDefault();
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task.completed === false)
    }));
  };


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasks} toggleTask={this.toggleTask} />
        <TodoForm clearCompleted={this.clearCompleted} addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
