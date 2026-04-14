import './App.css';
import Header from "./myComponents/Header";
import Todos from "./myComponents/Todos";
import Footer from "./myComponents/Footer";
import AddTodos from "./myComponents/AddTodos";
import React, {useEffect, useState} from 'react';
import About from './myComponents/About';
import Login from './myComponents/login';


import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo= JSON.parse(localStorage.getItem("todos"));
  }

  
  const onDelete = (todo) =>{
    console.log("I am onDelete of todo", todo);
    setTodos(todos.filter((e)=>{
      return e!==todo
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  
  // const onUpdate=(todo)=>{
  //   console.log("I am onUpdate of todo", todo);
  //   setTodos(todos.map((e)=>{
      
  //     if(e===todo){
  //       let updatedItem={ ...e, title: prompt("Enter new title", e.title), desc: prompt("Enter new description",e.desc)};
  //       if(updatedItem.title === null || updatedItem.desc===null || updatedItem.title==="" || updatedItem.desc===""){
  //         alert("Please enter valid title and description");
  //         return e;
  //       }
  //       return updatedItem;
  //     }
  //     return e
  //   }))
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }


  const addTodos=(title,desc)=>{
    console.log("I am adding this TODO", title,desc )
    let sno;
    if(todos.length===0){
      sno=0
    }
    else{
      sno= todos[todos.length-1].sno + 1;

    }
    const myTodo={
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

    
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(()=>{
      localStorage.setItem("todos", JSON.stringify(todos));
    },[todos])
  return (
    <>
    <Router>
      <Header title="My Todos List" searchBar={true} />

        <Routes>
          <Route exact path="/" element={
            <>
              {/*with update::  <Todos todos={todos} onUpdate={onUpdate} onDelete={onDelete}  /> */}
              <Todos todos={todos} onDelete={onDelete}  />
            </>
          } />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/create" element={<AddTodos addTodos={addTodos} />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      
      <Footer />
    </Router>
    </>
  );
}



export default App;
