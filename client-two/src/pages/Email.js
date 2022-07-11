//import "./AllEmployee.css";
import React from "react";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

 
function Email() {
  const [items, setItems] = useState([]);
  const [selectedEmails, changeSelectedEmails] = useState([]);
 
  const [pageCount, setpageCount] = useState(0);
  const navigate = useNavigate();

  let size = 5;
 
  useEffect(() => {
    const getEmployees= async () => {
 
      const res = await fetch(
        `http://localhost:8080/api/employees/show?page=1&size=${size}`
      );
      const data = await res.json();
      // console.log(data.totalPages);
      setpageCount(data.currentPage);
      // console.log(Math.ceil(total/12));
      setItems(data.employees);
    };
 
    getEmployees();
  }, [size]);
 
  const fetchEmployees = async (currentPage) => {
    const res = await fetch(
      `http://localhost:8080/api/employees/show?page=${currentPage}&size=${size}`
    );
    const data = await res.json();
    return data.employees;
  };
 
  async function handlePageClick(){
    // console.log(data.selected);
    // console.log("got LoadMore")
 
    const employees = await fetchEmployees(pageCount+1);
 
    setItems(items.concat(employees));
  };
 
  const checkboxClick = (email) => {
    if(selectedEmails.includes(email)){
      let tempSelectedEmails = selectedEmails.filter(function(e) { return e !== email })
      changeSelectedEmails(tempSelectedEmails);
    }
    else
      selectedEmails.push(email)
  };
 
  const clickMe = (data) => {
    navigate('/compose',{"success":true});
  }
  return (
    <div className="container">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        {items.map((item) => {
              return (
                <tr>
                  <td align="center">
                    <input 
                      type="checkbox"
                      onClick={() => checkboxClick(item.email)}
                    />
                  </td>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.email}</td>
              </tr>
              )})}
        </tbody>
      </Table>
 
      <div align="center">
        <Button
          variant="primary" 
          onClick={() => handlePageClick()}>
          Load More
        </Button>
      </div>
 
      <div align="right">
        <Link to="compose">
        <Button onClick={()=> clickMe(selectedEmails)}>Compose</Button>
        </Link>
      </div>
    </div>
  );
}
 
export default Email;