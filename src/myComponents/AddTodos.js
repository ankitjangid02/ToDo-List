import React, {useState} from 'react';
import './create.css';

const AddTodos = ({addTodos}) => {
    const [title, setTitle]= useState("");
    const [desc, setDesc]= useState("");
    const submit=(e)=>{
            e.preventDefault();
            if(!title || !desc){
                alert("Title or Description cannot be blank.")
            }
            else{
                addTodos(title,desc);
                setTitle("");
                setDesc("");

            }
    }
    return (
        
        <div className='container my-3'>
            <h3><center>Add a Todo</center></h3>
            <hr/>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" placeholder='Title'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" placeholder='Description'/>
                </div>
                <div className='butt'>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
                </div>
            </form>
        </div>
    )
}

export default AddTodos
