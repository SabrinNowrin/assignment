import React from "react";
import "./Home.css"
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Home = () => {
  return (
    <div className="home-button">
        <Navbar bg="light">
          <Container>
            <Navbar.Brand href="#home">
              <Link to="addemployee"><button>Add Employee</button></Link>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Navbar bg="light">
          <Container>
            <Navbar.Brand href="allemployee">
              <Link to="allemployee"><button>Show Employee</button></Link>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Navbar bg="light">
          <Container>
            <Navbar.Brand href="email">
              <Link to="email"><button>Send Email</button></Link>
            </Navbar.Brand>
          </Container>
        </Navbar>
    </div>
  );
};

export default Home;