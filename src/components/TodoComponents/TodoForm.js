import React from "react";
import "./Todo.scss";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ""
    };
  }

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addTask = event => {
    event.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({
      task: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.addTask}>
        <input
          value={this.state.task}
          name="task"
          onChange={this.handleChanges}
        />
        <button onClick={this.addTask}>Add Todo</button>
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
