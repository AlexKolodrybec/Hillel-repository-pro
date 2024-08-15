import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/store';

function TodoForm() {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.trim() !== '') {
            dispatch(addTodo(todo));
            setTodo('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit">Додати</button>
        </form>
    );
}

export default TodoForm;