import React from 'react';
import "./style.css";
import {Link} from "react-router-dom";
function NewStudent() {
    return (
        <>
            <h1>
                Add New Student Details
        </h1>
        <div className='new'>
           
            <label>Name</label>
            <input></input>
             <label>age</label>
            <input></input><br></br>
             <label>Course</label>
            <input></input>
             <label>Batch</label>
            <input></input><br></br>
           <Link to="Student"> <button type="submit">Add NewStudent</button></Link> 
            </div>
             </>
    )
}
export default NewStudent;
