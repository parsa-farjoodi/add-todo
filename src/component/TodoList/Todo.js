import React, { Component } from 'react'
import { MdDone } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function Todo(props) {

    const removeClickHandler = (id) => {
        props.onRemove(id)
    }

    const editClickHandler = (id) => {
        props.onEdit(id)
    }

    return (
        <div className={`todo ${props.completed ? 'completed' : ''}`} style={{ display: 'flex',}}>
            <li className="todo-item">{props.title}</li>

            <button className="check-btn" onClick={() => editClickHandler(props.id)}>
                <MdDone />
            </button>

            <button className="trash-btn" onClick={() => removeClickHandler(props.id)}>
                <MdDelete />
            </button>
        </div>
    )
}