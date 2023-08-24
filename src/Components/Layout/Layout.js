import { Outlet, Link } from "react-router-dom";
import './Layout.css'

function Layout() {
    return (
      <div>
        <hr className="hr"/>
        <nav>
            <Link to="/" className="Layout-Link"> Home </Link>
            <Link to="/about" className="Layout-Link"> About </Link>
            <Link to="/resume" className="Layout-Link"> Resume </Link>
            <Link to="/codingprojects" className="Layout-Link"> CodingProjects </Link>
        </nav>
        <hr className="hr"/>
        <Outlet />
      </div>
    );
}


export default Layout;