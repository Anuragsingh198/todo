import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import TodoList from './components/TodoList';
import EmployeeList from './components/EmployeesList';

const App = () => (
  <div className="w-[800px] mx-auto  bg-gray-100 p-4">
    <nav className="mb-4">
      <ul className="flex gap-4">
        <li><Link to="/" className="text-blue-500 hover:underline">Todo List</Link></li>
        <li><Link to="/employees" className="text-blue-500 hover:underline">Employee List</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="/employees" element={<EmployeeList />} />
    </Routes>
  </div>
);

export default App;