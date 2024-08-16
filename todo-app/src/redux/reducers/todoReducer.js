import {
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO,
    EDIT_TODO,
    CLEAR_TODOS,
  } from '../actions/todoActions';
  
  const initialState = {
    todos: [],
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
          ...state,
          todos: [...state.todos, action.todo],
        };
      case DELETE_TODO:
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.id),
        };
      case TOGGLE_TODO:
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
          ),
        };
      case EDIT_TODO:
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.id ? { ...todo, text: action.text } : todo
          ),
        };
      case CLEAR_TODOS:
        return {
          ...state,
          todos: [],
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;