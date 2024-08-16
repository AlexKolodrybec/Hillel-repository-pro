import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo, editTodo, clearTodos, loadTodos } from '../redux/actions/todoActions';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  const handleAddTodo = () => {
    const todoText = prompt('Enter TODO:');
    if (todoText) {
      dispatch(addTodo({
        id: Date.now(),
        text: todoText,
        completed: false
      }));
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleEditTodo = (id) => {
    const newText = prompt('Edit TODO:');
    if (newText) {
      dispatch(editTodo(id, newText));
    }
  };

  const handleClearTodos = () => {
    dispatch(clearTodos());
  };

  return (
    <div>
      <h1>TODO List</h1>
      <button onClick={handleAddTodo}>Add TODO</button>
      <button onClick={handleClearTodos}>Clear All</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => handleToggleTodo(todo.id)}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;