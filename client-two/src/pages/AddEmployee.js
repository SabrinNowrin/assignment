import React, { useState } from "react";
import "./Home.css"
import { Link } from "react-router-dom";

const AddEmployee = () => {
  return (
    <div className="home-button">
        <Link to="singleadd"><button>Add Single Employee</button></Link>
        <Link to="upload"><button>Add Employees From CSV</button></Link>
    </div>
  );
};

export default AddEmployee;