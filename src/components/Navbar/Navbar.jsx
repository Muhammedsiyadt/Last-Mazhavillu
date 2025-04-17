import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../../assets/css/Navbar.css";

const Navbar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Pages", path: "/pages" },
    { name: "Vendors", path: "/vendors" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="nav-bar">
      <nav className="navbar">
        <div className="navbar-container">
          <ul className={`nav-list ${isOpen ? "active" : ""}`}>
            {navItems.map((item, index) => (
              <li
                className={`nav-item ${index === navItems.length - 1 ? "no-border" : ""}`}
                key={item.name}
              >
                <NavLink
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
