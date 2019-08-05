import React from "react";

const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleChanges}
        value={props.task}
        name="task"
      />
      <button onClick={props.addTask}>Add Todo</button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  );
}

export default TodoForm;
