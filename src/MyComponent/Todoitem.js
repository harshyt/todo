import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'

export const Todoitem = ({todo, onDelete}) => {
    return (
        <div>
            <h4 className="text-center">{todo.title}</h4>
            <p className="text-center">{todo.desc}</p>
            <button className="btn btn-sm btn-danger mx-auto" onClick={() => {onDelete(todo)}}>Delete</button>
        </div>
    )
}
