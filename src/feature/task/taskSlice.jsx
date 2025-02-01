import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: Date.now(), ...action.payload });
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const taskIndex = state.tasks.findIndex(task => task.id === id);
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = { ...state.tasks[taskIndex], ...updatedTask };
      }
    },
    toggleComplete: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, deleteTask, editTask, toggleComplete } = taskSlice.actions;
export default taskSlice.reducer;

// const initialState = {
//   tasks: [],
// };

// export function taskReducer(state = initialState, action) {
//   switch (action.type) {
//     case "tasks/addTask":
//       return {
//         ...state,
//         tasks: [...state.tasks, { id: Date.now(), ...action.payload }],
//       };
//     case "tasks/deleteTask":
//       return {
//         ...state,
//         tasks: state.tasks.filter((task) => task.id !== action.payload),
//       };
//     case "tasks/editTask":
//       return {
//         ...state,
//         tasks: state.tasks.map((task) =>
//           task.id === action.payload.id
//             ? { ...task, ...action.payload.updatedTask }
//             : task
//         ),
//       };
//     case "tasks/toggleComplete":
//       return {
//         ...state,
//         tasks: state.tasks.map((task) =>
//           task.id === action.payload
//             ? { ...task, completed: !task.completed }
//             : task
//         ),
//       };
//     default:
//       return state;
//   }
// }

// export const addTask = (task) => ({ type: "tasks/addTask", payload: task });
// export const deleteTask = (id) => ({ type: "tasks/deleteTask", payload: id });
// export const editTask = (id, updatedTask) => ({
//   type: "tasks/editTask",
//   payload: { id, updatedTask },
// });
// export const toggleComplete = (id) => ({
//   type: "tasks/toggleComplete",
//   payload: id,
// });
