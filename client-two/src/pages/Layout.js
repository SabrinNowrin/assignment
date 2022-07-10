import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/">
            <h1 style={{textAlign:"center", color:"black"}} > TechNext </h1>
        </Link>
        
        {/* <ul>
          <li>
            <Link to="/add">Add</Link>
          </li>
          <li>
            <Link to="/upload">Upload</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/email">Email</Link>
          </li>
        </ul> */}
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
