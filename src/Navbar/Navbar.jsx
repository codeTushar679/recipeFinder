import React from "react";
import { NavLink, Outlet } from "react-router";
import "./Navbar.css";
import Animate from "../pages/animate";

const Navbar = () => {
  return (

    <div>

      <nav className="navbar">
        <div className="logo">RECIPE FINDER</div>
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="saveditems">Saved Items</NavLink></li>      </ul>
      </nav>

    </div>

  );
};

export default Navbar;
