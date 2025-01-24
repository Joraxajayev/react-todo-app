import { createStore, combineReducers } from 'redux';
import { taskReducer } from './feature/task/taskSlice';

// Combine reducers (if needed, for multiple slices)
const rootReducer = combineReducers({
  tasks: taskReducer,
});

// Create store
const store = createStore(rootReducer);

export default store;
