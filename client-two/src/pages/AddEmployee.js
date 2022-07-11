import React, { useState } from "react";
import "./Home.css"
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const AddEmployee = () => {
  return (
    <div className="home-button">
        <Navbar bg="light">
          <Container>
            <Navbar.Brand href="#home">
              <Link to="singleadd"><button>Add Single Employee</button></Link>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Navbar bg="light">
          <Container>
            <Navbar.Brand href="#home">
              <Link to="upload"><button>Add Employees From CSV</button></Link>
            </Navbar.Brand>
          </Container>
        </Navbar>
      
        
    </div>
  );
};

export default AddEmployee;