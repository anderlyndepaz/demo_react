import React from "react";
import "./ToDoItem.css";

const ToDoItem = ({data, remove, edit}) => {
  const {task} = data;
  return (
    <article>
      <h3>Titulo:{task}</h3>
      <button onClick={remove}>Borrar</button>
      <button onClick={edit}>Editar</button>
      </article>
  );
};

export default ToDoItem;
