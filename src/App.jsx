// App.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  addTodo, 
  toggleTodo, 
  deleteTodo,
  startEditing,
  updateTodo,
  cancelEditing
} from './feature/todoSlice';

function App() {
  const [input, setInput] = useState('');
  const [editInput, setEditInput] = useState('');
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  const handleEdit = (id, text) => {
    dispatch(startEditing(id));
    setEditInput(text);
  };

  const handleUpdate = (id) => {
    if (editInput.trim()) {
      dispatch(updateTodo({ id, newText: editInput }));
      setEditInput('');
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="text-center mb-4">Todo List</h1>
              
              <form onSubmit={handleSubmit} className="mb-4">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add new task..."
                  />
                  <button type="submit" className="btn btn-primary">
                    Add
                  </button>
                </div>
              </form>

              <ul className="list-group">
                {todos.map((todo) => (
                  <li
                    key={todo.id}
                    className="list-group-item"
                  >
                    {todo.isEditing ? (
                      <div className="d-flex gap-2">
                        <input
                          type="text"
                          className="form-control"
                          value={editInput}
                          onChange={(e) => setEditInput(e.target.value)}
                        />
                        <button
                          className="btn btn-success"
                          onClick={() => handleUpdate(todo.id)}
                        >
                          Save
                        </button>
                        <button
                          className="btn btn-secondary"
                          onClick={() => dispatch(cancelEditing())}
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div className="d-flex align-items-center gap-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          checked={todo.completed}
                          onChange={() => dispatch(toggleTodo(todo.id))}
                        />
                        <span
                          className={`flex-grow-1 ${
                            todo.completed ? 'text-decoration-line-through text-muted' : ''
                          }`}
                        >
                          {todo.text}
                        </span>
                        <button
                          className="btn btn-warning btn-sm"
                          onClick={() => handleEdit(todo.id, todo.text)}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => dispatch(deleteTodo(todo.id))}
                          className="btn btn-danger btn-sm"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
