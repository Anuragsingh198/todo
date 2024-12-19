import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './TodoSlice';
import employeesReducer from './EmployeeSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    employees: employeesReducer,
  }
});

export default store;
