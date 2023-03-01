import React from "react";
import Nav from "./Nav";
import {Link} from "react-router-dom"
import "./style.css"

function Student() {
        
    // const handleOnSubmit = () => {
    // <Link to="/NewStudent"></Link>
    // }

        return (
            <div className="mainbody home">
                 <div > <Nav /></div>
                <br></br>
                <Link><div className="btn"> Student Details <button > add new Student </button> </div></Link><br></br>
             

                <table border={1}
                    className="table" >
                    <tbody>
                    <tr className="row">
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>batch</th>
                        <th>Change</th>
                    </tr>
                    <tr>
                        <td>Praveen</td>
                        <td>Prepbyte</td>
                        <td>MERN</td>
                        <td>EA19</td>
                        <td>Edit</td>
                       
                    </tr>
                     <tr>
                        <td>Praveen</td>
                        <td>Prepbyte</td>
                        <td>MERN</td>
                        <td>EA19</td>
                        <td>Edit</td>
                       
                        </tr>
                          <tr>
                        <td>Praveen</td>
                        <td>Prepbyte</td>
                        <td>MERN</td>
                        <td>EA19</td>
                        <td>Edit</td>
                       
                        </tr>
                          <tr>
                        <td>Praveen</td>
                        <td>Prepbyte</td>
                        <td>MERN</td>
                        <td>EA19</td>
                        <td>Edit</td>
                       
                        </tr>
                          <tr>
                        <td>Praveen</td>
                        <td>Prepbyte</td>
                        <td>MERN</td>
                        <td>EA19</td>
                        <td>Edit</td>
                       
                        </tr>
                          <tr>
                        <td>Praveen</td>
                        <td>Prepbyte</td>
                        <td>MERN</td>
                        <td>EA19</td>
                        <td>Edit</td>
                       
                        </tr>
                        </tbody>
                </table>
            </div>
        );
};
export default Student;
