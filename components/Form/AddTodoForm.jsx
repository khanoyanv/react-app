import React from 'react'
import AddTodoInput from './AddTodoInput'
import PrioritySelector from './PrioritySelector'
import AddTodoButton from './AddTodoButton'
import './form.css'

function AddTodoForm({addTodo, removeSelected}) {
const addTodoHandler = () => {
    console.log("hellow")
    let name = document.getElementById("name-input").value;
    let priority = document.getElementById("priority").value;
    let todo = {
        id: Math.floor((Math.random() * 100) + 1),
        name,
        priority,
        checked: false,
    }
    addTodo(todo);
}

return (
    <div className="form">
        <PrioritySelector />
        <AddTodoInput />
        <AddTodoButton primary={true} name={"Add Todo"} clickHandler={addTodoHandler}/>
        <AddTodoButton primary={false} name={"Remove Selected"} clickHandler={removeSelected}/>
    </div>
)
}

export default AddTodoForm