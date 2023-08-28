import { Outlet, Link } from "react-router-dom";
import './Layout.css'
import Sidebar from "./Sidebar";

function Layout() {
    return (
      <view className="Layout-Container">
        <hr className="hr"/>
          <nav>
            <heading className="Layout-Title">Alec Odell</heading>
            <Link to="/" className="Layout-Link"> Home </Link>
            <hr className="vertical"></hr>
            <Link to="/About" className="Layout-Link"> About </Link>
            <hr className="vertical"></hr>
            <Link to="/Resume" className="Layout-Link"> Resume </Link>
            <hr className="vertical"></hr>
            <Link to="/CodingProjects" className="Layout-Link"> Coding Projects </Link>
            <hr className="vertical-last"></hr>
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
          </nav>
        <hr className="hr"/>
        <Outlet />
      </view>
    );
}


export default Layout;

              /**<div className="hamburger" onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen}/>
                <Menu isOpen={hamburgerOpen}/>
              </div>*/