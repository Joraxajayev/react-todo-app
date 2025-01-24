import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

function TaskList() {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <div className="container">
      <div className="list-group">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
