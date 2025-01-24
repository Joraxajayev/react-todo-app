import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../task/taskSlice";

function SubmitForm() {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      dispatch(addTask({ name: taskName, completed: false }));
      setTaskName("");
    }
  };

  return (
    <div className="container py-4">
      <div className="row">
        <form
          onSubmit={handleSubmit}
          className="d-flex align-items-center mb-3">
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Add Task"
            className="form-control me-2"
          />
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default SubmitForm;
