import React, { useState } from "react";
import Axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const SingleAdd = () => {
  const [firstname, setFname] = useState("");
  const [lastname, setLname] = useState("");
  const [email, setEmail] = useState("");
   
   const notify = (message) => toast.info(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});
  const addEmployee = () =>{
    console.log(firstname + lastname);
    Axios.post('http://localhost:8080/api/employees/', {
      firstname: firstname, 
      lastname: lastname,
      email: email
      }).then((res)=>{
        console.log(res.data.success);
        if(res.data.success ===true){
        notify("Success: 1, Error: 0");
        } else{
        notify("Success: 0, Error: 1");
      }
  

        console.log('Success');
        console.log(res.data);
      });
  };
  return (
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
        <label>Email:</label>
      <input type="text" 
        onChange={(event)=>{
          setEmail(event.target.value)
        }}
        />
      <button onClick={addEmployee}>Add Employee</button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        {/* Same as */}
      <ToastContainer />
      </div>
  );
};

export default SingleAdd;
