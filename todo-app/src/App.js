import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const addTodo = () => {
    if (inputValue.trim() === '') {
      setError('Todo cannot be empty!');
      return;
    }
    setTodos([...todos, inputValue]);
    setInputValue('');
    setError('');
  };

  return (
    <div>
      <h1>TODO</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={addTodo}>Add</button>
      {error && <p>{error}</p>}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;