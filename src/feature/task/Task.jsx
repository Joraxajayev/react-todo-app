import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask, toggleComplete } from "./taskSlice";

function Task({ task }) {
  const dispatch = useDispatch();

  return (
    <div className="list-group-item d-flex align-items-center justify-content-between">
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={task.completed}
          onChange={() => dispatch(toggleComplete(task.id))}
          id={`task-${task.id}`}
        />
        <label
          className={`form-check-label ${
            task.completed ? "text-decoration-line-through text-muted" : ""
          }`}
          htmlFor={`task-${task.id}`}>
          {task.name}
        </label>
      </div>
      <div>
        <button
          className="btn btn-sm btn-warning me-2"
          onClick={() =>
            dispatch(
              editTask(task.id, { name: prompt("Edit Task:", task.name) })
            )
          }>
          Edit
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => dispatch(deleteTask(task.id))}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;
