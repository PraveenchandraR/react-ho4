import React from 'react';
import "./style.css";
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
           <a href='/Student' > <button type="submit">Add NewStudent</button></a> 
            </div>
             </>
    )
}
export default NewStudent;