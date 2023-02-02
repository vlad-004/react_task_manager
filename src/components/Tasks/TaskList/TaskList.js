import React from "react";

import Task from "../Task/Task";
import "./TaskList.css";

const TaskList = (props) => {
  return (
    <ul className="task-list">
      {/*  тут перебираем каждый элемент массива исходного из Апп, соотвественно
       для них создаем компоненты таск с указаными атрибутами*/}
      {props.items.map((task) => (
        <Task key={task.id} id={task.id} onDelete={props.onDeleteTask}>
          {task.text}
        </Task>
      ))}
    </ul>
  );
};

export default TaskList;
