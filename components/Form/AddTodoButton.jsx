import React from 'react'

function AddTodoButton({name, primary, clickHandler}) {
    return (
        <button onClick={clickHandler} type="button" className={`form-button btn btn-${primary ? "primary" : "danger"}`}>{name}</button>
    )
}

export default AddTodoButton