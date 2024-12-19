import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateTodo, deleteTodo } from '../redux/TodoSlice';

const TodoList = () => {
  const [text, setText] = useState('');
  const [editId, setEditId] = useState(null);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddOrUpdate = () => {
    if (editId) {
      dispatch(updateTodo({ id: editId, text }));
      setEditId(null);
    } else {
      dispatch(addTodo(text));
    }
    setText('');
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h1 className="text-xl font-bold mb-4">Todo List</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border rounded p-2 flex-grow"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAddOrUpdate}
        >
          {editId ? 'Update' : 'Add'}
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between mb-2">
            <span>{todo.text}</span>
            <div className="flex gap-2">
              <button
                className="text-blue-500"
                onClick={() => {
                  setText(todo.text);
                  setEditId(todo.id);
                }}
              >
                Edit
              </button>
              <button
                className="text-red-500"
                onClick={() => dispatch(deleteTodo(todo.id))}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;