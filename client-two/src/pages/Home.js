import React, { useState } from "react";
import Axios from "axios";
import "./Home.css"
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="home-button">
        <Link to="addemployee"><button>Add Employee</button></Link>
        <Link to="allemployee"><button>Show Employee</button></Link>
        <Link to="email"><button>Send Email</button></Link>
    </div>
  );
};

export default Home;