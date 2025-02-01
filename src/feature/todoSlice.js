import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: Date.now(),
                text: action.payload,
                completed: false,
                isEditing: false
            });
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        startEditing: (state, action) => {
            state.todos = state.todos.map(todo => 
                todo.id === action.payload
                    ? { ...todo, isEditing: true }
                    : { ...todo, isEditing: false }
            );
        },
        updateTodo: (state, action) => {
            const { id, newText } = action.payload;
            state.todos = state.todos.map(todo =>
                todo.id === id
                    ? { ...todo, text: newText, isEditing: false }
                    : todo
            );
        },
        cancelEditing: (state) => {
            state.todos = state.todos.map(todo => ({
                ...todo,
                isEditing: false
            }));
        }
    },
});

export const { 
    addTodo, 
    toggleTodo, 
    deleteTodo, 
    startEditing, 
    updateTodo, 
    cancelEditing 
} = todoSlice.actions;
export default todoSlice.reducer;
