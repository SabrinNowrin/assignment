import React, { useState } from 'react';
import Axios from "axios";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useLocation, useNavigate } from 'react-router-dom';

const Compose = () => {
  
  const [emailsub, setSub] = useState("");
  const [emailbody, setEbody] = useState("");
  const location = useLocation();
  const emailids = location.state.emails ;
  const navigate = useNavigate();

  const sendEmail= () =>{
    console.log(emailids);
    Axios.post('http://localhost:8080/api/employees/email', {
      emailids: emailids, 
      emailsub: emailsub,
      emailbody: emailbody,
      }).then((res)=>{
       
      });
       navigate('/');
  };
  return (
    <Container>
      <Form>
          <h1>Sending Emails to Selected Email Addresses</h1>
          <Form.Group className="mb-3">
            <Form.Label>Email Subject</Form.Label>
            <Form.Control type="text" placeholder="Email Subject" 
              onChange={(event)=>{
              setSub(event.target.value)}}
              />
          </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Email Body</Form.Label>
        <Form.Control type="text" placeholder="Email body" 
            onChange={(event)=>{
              setEbody(event.target.value)
            }}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={sendEmail}>
          Submit
        </Button>
    </Form>
  </Container>
      
      
  );
};

export default Compose;
