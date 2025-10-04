import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todos/todo';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState('');

  const handleEditClick = (todo) => {
    setEditingId(todo.id);
    setEditedText(todo.text);
  };

  const handleSaveClick = (id) => {
    if (editedText.trim()) {
      dispatch(updateTodo({ id, text: editedText }));
      setEditingId(null);
      setEditedText('');
    }
  };

  return (
    <ul className="list-none">
      {todos.map((todo) => (
        <li
          className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          key={todo.id}
        >
          {editingId === todo.id ? (
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className="text-black px-2 py-1 rounded outline-none flex-1 mr-4"
            />
          ) : (
            <div className="text-white flex-1">{todo.text}</div>
          )}

          <div className="flex gap-2">
            {editingId === todo.id ? (
              <button
                onClick={() => handleSaveClick(todo.id)}
                className="text-white bg-green-500 py-1 px-4 rounded hover:bg-green-600"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => handleEditClick(todo)}
                className="text-white bg-blue-500 py-1 px-4 rounded hover:bg-blue-600"
              >
                Edit
              </button>
            )}

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 py-1 px-4 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Todos;
