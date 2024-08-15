import React from 'react';
import { useSelector } from 'react-redux';

function TodoList() {
    const todos = useSelector((state) => state.todos.list);

    return (
        <div>
            {todos.map((todo, index) => (
                <div key={index} className="todo-item">
                    {todo}
                </div>
            ))}
        </div>
    );
}

export default TodoList;