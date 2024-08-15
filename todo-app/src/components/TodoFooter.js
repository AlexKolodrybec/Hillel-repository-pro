import React from 'react';
import { useSelector } from 'react-redux';

function TodoFooter() {
    const todosCount = useSelector((state) => state.todos.list.length);

    return (
        <div className="todo-footer">
            Усього: {todosCount}
        </div>
    );
}

export default TodoFooter;