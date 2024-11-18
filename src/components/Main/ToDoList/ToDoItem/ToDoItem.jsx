import React from "react";
import "./ToDoItem.css";

const ToDoItem = ({data, remove}) => {
  const {task} = data;
  return (
    <article>
      <h3>Titulo:{task}</h3>
      <button onClick={remove}>Borrar</button>
      </article>
  );
};

export default ToDoItem;
