import React from "react";
import { useState } from "react";

const EditTodoForm = ({editTodo,task}) => {
    const [value,setValue] =useState(task.task);


    const handleSubmit = e =>{
        e.preventDefault();
        editTodo(value,task.id);

        setValue("");
    }

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" value={value} className="todo-input" placeholder="... " onChange={(e) => {
                setValue(e.target.value);
            }}></input>
            <button type="submit" className="todo-btn" >Update task</button>
        </form>

)}
export default EditTodoForm;