import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/" style={{ textDecoration: 'none' , marginTop: '3rem'}}>
            <h1 style={{textAlign:"center", color:"black"}} > Collect Bean </h1>
        </Link>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
