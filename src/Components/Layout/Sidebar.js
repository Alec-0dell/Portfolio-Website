import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
  return (
    <Menu right>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/About">
        About
      </a>
      <a className="menu-item" href="/Resume">
        Resume
      </a>
      <a className="menu-item" href="/CodingProjects">
        Coding Projects
      </a>
      <hr>
      </hr>
      <a className="menu-item" href="https://github.com/Alec-0dell">
        GitHub
      </a>
      <a className="menu-item" href="https://github.com/Alec-0dell">
        LinkedIn
      </a>
    </Menu>
  );
};