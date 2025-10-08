import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logoPT.png"
const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/home" className="navbar-logo">
            <img src={logo} alt="Logo Multi Makmur Teknologi" className="logo-img" />
            <span className="navbar-title">Multi Makmur Teknologi</span>
          </Link>

          <ul className="navbar-menu">
            {["home", "service", "about", "contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item}`}
                  className={`navbar-link ${
                    location.pathname === `/${item}` ? "active" : ""
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
