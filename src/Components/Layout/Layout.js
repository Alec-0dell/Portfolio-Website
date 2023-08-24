import { Outlet, Link } from "react-router-dom";
import './Layout.css'

function Layout() {
    return (
      <div>
        <hr className="hr"/>
        <nav>
          <heading className="Layout-Title">Alec Odell</heading>
            <Link to="/" className="Layout-Link"> Home </Link>
            <Link to="/About" className="Layout-Link"> About </Link>
            <Link to="/Resume" className="Layout-Link"> Resume </Link>
            <Link to="/CodingProjects" className="Layout-Link"> Coding Projects </Link>
        </nav>
        <hr className="hr"/>
        <Outlet />
      </div>
    );
}


export default Layout;