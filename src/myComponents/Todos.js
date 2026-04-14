import React from 'react'
import TodoItem from "./TodoItem";

const Todos = (props) => {
  const myStyle={
    minHeight:"70vh",
    margin: "40px auto"
  }
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className='my-3'><u>Todos List</u> :</h3>
      {props.todos.length===0? "No Todos to display": 
      props.todos.map((todo)=>{
        
        return (
          // With update::::<TodoItem todo={todo} key={todo.sno} onUpdate={props.onUpdate} onDelete={props.onDelete} />
          <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
        )
      })
    }
    </div>
  )
}

export default Todos
