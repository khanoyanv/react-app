import React from 'react'
import "./todo.css";

function TodoListItem({todo, toggleChecked, deleteTodo}) {
    const handleClick = () => {
        toggleChecked(todo.id);
    }

    const handleDelete = () => {
        deleteTodo(todo.id);
    }

    return (
        <div className="todo-list-item">
            <div className="todo-list-item-name-container">
                <input className="todo-list-item-checkbox" type="checkbox" checked={todo.checked} onChange={handleClick} />
                <p className='todo-list-item-name'>{todo.name}</p>
            </div>
            <div className="todo-list-item-status">{todo.priority}</div>
            <span onClick={handleDelete} className="todo-list-item-delete">&#10005;</span>
        </div>
    )
}

export default TodoListItem