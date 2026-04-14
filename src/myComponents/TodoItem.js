import React, { useState } from 'react';
import "./Todos.css";

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const [isStriked, setIsStriked] = useState(false);
  const [bgColor, setBgColor]= useState('rgb(118, 218, 69)');
  const [status, setStatus] = useState("unDone");

  const handleCheckboxClick = () => {
    setIsStriked(prev => !prev);
    setBgColor(isStriked ? "rgb(118, 218, 69)" : "lightgray");
    setStatus(isStriked ? "unDone" : "Done");
  };

  const itemStyle={
    backgroundColor: bgColor,
    transition: "background-color 0.5s ease"
  }

  return (
    <>
      <div className="item" style={itemStyle}>
        <h4 style={{ textDecoration: isStriked ? 'line-through' : 'none' }}>{todo.title}</h4>
        <p style={{ textDecoration: isStriked ? 'line-through' : 'none' }}>{todo.desc}</p>

        <button onClick={handleCheckboxClick}  className={`btn btn-sm btn-primary ${isStriked ? 'checked' : ''}`}>{status==="Done" ? "unDone" : "Done"}</button>
        {" "}

        {/* <button className="btn btn-sm btn-success" onClick={()=>{onUpdate(todo)}}>Update</button>{" "} */}
        <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>Delete</button>
      </div>
      <hr />
    </>
  );
};

export default TodoItem;
