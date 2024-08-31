import React, { useState } from 'react';
import TodoListItem from './TodoListItem';
import AddTodoForm from '../Form/AddTodoForm';
import "./todo.css";

function TodoList() {
  const [todoList, setTodoList] = useState(
    [
      {
        id: 1,
        name: "Create React App",
        priority: "High",
        checked: false,
      },
      {
        id: 2,
        name: "Upload to Github",
        priority: "Medium",
        checked: false,
      },
      {
        id: 3,
        name: "Listen to Music",
        priority: "Low",
        checked: false,
      }
    ]
  );

  function setChecked(id) {
    setTodoList((prevTodos) => prevTodos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo))
  }

  function deleteTodo(id) {
    setTodoList(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }

  function removeSelected() {
    setTodoList(prevTodos => prevTodos.filter(todo => !todo.checked));
  }

  function addTodo(todo) {
    setTodoList(prevTodos => [...prevTodos, todo]);
  }

  return (
    <div className='todo-list'>
        {
          todoList.map(todoListItem => {
            return <TodoListItem key={todoListItem.id} todo={todoListItem} toggleChecked={setChecked} deleteTodo={deleteTodo} />
          })
        }
        <div className="add-todo-form-container">
          <AddTodoForm addTodo={addTodo} removeSelected={removeSelected}/>
        </div>
    </div>
  )
}

export default TodoList;