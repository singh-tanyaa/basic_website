import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Layout.css";
import logo from "../assets/logo.png";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        {/* <h1>Website Header</h1> */}
        <nav>
          <Link to="/" className="title">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <ul>
            <li>
              <NavLink to="/about" activeClassName="active-link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/service" activeClassName="active-link">
                Service
              </NavLink>
            </li>
            <li>
              <NavLink to="/product" activeClassName="active-link">
                Product
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active-link">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>

      <footer
        style={{
          backgroundColor: "#0f172a",
          color: "white",
          padding: "20px",
          position: "fixed",
          bottom: "0",
          width: "100%",
        }}
      >
        <p style={{ margin: "0" }}>&copy; 2024 Your Website</p>
      </footer>
    </div>
  );
};

export default Layout;
