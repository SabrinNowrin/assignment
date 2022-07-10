import "./App.css";
import React, { useState } from "react";
import Axios from "axios";

function App() {

  const [firstname, setFname] = useState("");
  const [lastname, setLname] = useState("");

  const addEmployee = () =>{
    console.log(firstname + lastname);

    Axios.post('http://localhost:3001/create', {
      firstname: firstname, 
      lastname: lastname
      }).then(()=>{
        console.log('Success');
      });
  };
  return (
    <div className="App">
      <div className="information">
      <label>FirstName:</label>
      <input type="text" 
        onChange={(event)=>{
          setFname(event.target.value)
        }}
        />
      <label>LastName:</label>
      <input type="text" 
        onChange={(event)=>{
          setLname(event.target.value)}}
        />
      <button onClick={addEmployee}>Add Employee</button>
      </div>
    </div>
  );
 
}
export default App;
