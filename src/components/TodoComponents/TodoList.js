import React from "react";

import Todo from "./Todo";

import "./Todo.scss";

const TodoList = props => {
  console.log(props);
  return (
    <div className="list-container">
      {props.tasks.map(task => {
        return <Todo key={task.id} toggleTask={props.toggleTask} task={task} />;
      })}
    </div>
  );
};

export default TodoList;
