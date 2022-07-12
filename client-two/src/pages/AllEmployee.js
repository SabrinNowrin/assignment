//import "./AllEmployee.css";
 
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table'

function AllEmployee() {
  const [items, setItems] = useState([]);
 
  const [pageCount, setpageCount] = useState(0);
 
  let size = 5;
 
  useEffect(() => {
    const getEmployees= async () => {
      const res = await fetch(
        `http://localhost:8080/api/employees/show?page=1&size=${size}`
      );
      const data = await res.json();
      console.log(data.totalPages);
      setpageCount(data.totalPages);
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
 
  const handlePageClick = async (data) => {
    console.log(data.selected);
 
    let currentPage = data.selected + 1;
 
    const employees = await fetchEmployees(currentPage);
 
    setItems(employees);
    // scroll to the top
    //window.scrollTo(0, 0)
  };
  return (
    <div className="container">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        {items.map((item) => {
              return (
                <tr>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.email}</td>
              </tr>
              )})}
        </tbody>
      </Table>
 
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}
 
export default AllEmployee;