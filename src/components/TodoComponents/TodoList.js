import React from "react";
import uuid from 'react-uuid';

import Todo from "./Todo";

const TodoList = props => {
  return (
    <>
      {props.tasks.map(task => {
        return <Todo key={uuid()} toggleTask={props.toggleTask} task={task} />;
      })}
    </>
  );
}

export default TodoList;