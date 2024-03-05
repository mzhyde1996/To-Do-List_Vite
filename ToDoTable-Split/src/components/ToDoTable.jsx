import React from 'react';

const TodoTable = ({ todos, handleDelete }) => (
  <table>
    <tbody>
      {todos.map((todo, index) => (
        <tr key={index}>
          <td>{todo.description}</td>
          <td>{todo.date}</td>
          <td>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TodoTable;
