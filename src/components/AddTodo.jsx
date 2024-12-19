import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/TodoSlice';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo({ id: Date.now(), text }));
      setText('');
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo"
        className="border p-2 rounded w-full"
      />
      <button
        onClick={handleAddTodo}
        className="bg-blue-500 text-white mt-2 p-2 rounded w-full"
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
