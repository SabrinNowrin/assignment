import React, { useState } from "react";
import Axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


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
    <Container>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>FirstName</Form.Label>
          <Form.Control type="text" placeholder="FirstName"
           onChange={(event)=>{
          setFname(event.target.value)
        }} />
       </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>LastName</Form.Label>
            <Form.Control type="text" placeholder="lastname" 
              onChange={(event)=>{
              setLname(event.target.value)}}
              />
          </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
            onChange={(event)=>{
              setEmail(event.target.value)
            }}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={addEmployee}>
          Submit
        </Button>
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
    </Form>
  </Container>
      
      
  );
};

export default SingleAdd;
