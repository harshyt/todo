import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc)
            alert("empty fields");
        else 
            {
                // console.log(title)
                props.addTodo(title, desc)
            }
    }
    return (
        <div className="container">
            <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Todo Title</Form.Label>
                <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description" />
            </Form.Group>
            <Button variant="primary" type="submit" className="btn btn-sm btn-success">
                Add
            </Button>
        </Form>
        </div>
    )
}
