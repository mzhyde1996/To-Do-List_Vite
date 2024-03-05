import React, { useState } from 'react';
import TodoTable from './ToDoTable';

function ToDoList() {
  const [todo, setTodo] = useState({
    description: '',
    date: '',
  });
  const [todos, setTodos] = useState([]);

  const handleClick = () => {
    if (todo.description) {
      setTodos([...todos, todo]);
      setTodo({ description: '', date: '' });
    } else {
      alert('Type a description first');
    }
  };

  const handleDelete = (index) => {
    setTodos((prevTodos) => deleteTodoByIndex(prevTodos, index));
  };

  const deleteTodoByIndex = (todos, index) => {
    return todos.filter((_, i) => i !== index);
  };

  return (
    <>
      <input
        placeholder="Description"
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <input
        type="date"
        value={todo.date}
        onChange={(e) => setTodo({ ...todo, date: e.target.value })}
      />

      <button onClick={handleClick}>Add Todo</button>

      <TodoTable todos={todos} handleDelete={handleDelete} />
    </>
  );
}

export default ToDoList;
