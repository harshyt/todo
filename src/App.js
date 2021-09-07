import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './MyComponent/Header';
import { Footer } from './MyComponent/Footer';
import { Todoitem } from './MyComponent/Todoitem';
import { Todos } from './MyComponent/Todos';
import React, {useState, useEffect} from 'react';
import { AddTodo } from './MyComponent/AddTodo';


function App() {
  let initTodo = 0;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo) => {
    console.log('Deleted',todo); 
    setTodos(todos.filter((e) => {
      return e!==todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  const addTodo = (title, desc) => {
    let sno = 0;
    if (todos.length == 0)
      sno = 0; 
    else 
      sno = todos[todos.length-1].sno+1;
    console.log(sno)
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);

    localStorage.setItem("todos", JSON.stringify(todos))
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (
    <>
    <Header title="My todo" dropdown={false}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todoitem={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
