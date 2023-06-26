import React from 'react';

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div className="item">
      <input type="checkbox" onClick={() => completeTodo(index)} />
      <p>{todo.text}</p>
      <button onClick={() => removeTodo(index)}>X</button>
    </div>
  );
}

export default Todo;

