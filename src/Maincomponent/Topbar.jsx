import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import UnitConvertor from '../Components/UnitConvertor';

const Topbar = () => {
  const navigate= useNavigate();
  const handlenavigate=()=>{
    navigate("/login");
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img
              src="/public/smalllogo.jpg"
              className="logo ps-5"
              alt="Logo"
            />
          </NavLink>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4">
              <li className="nav-item mx-2">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active-link" : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  to="/aboutUs"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active-link" : ""}`
                  }
                >
                  About us
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  to="/propertyform"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active-link" : ""}`
                  }
                >
                  Properties
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  to="/contactUs"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active-link" : ""}`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              <div className="px-2">
              <button
                    type="button"
                    className="btn btn-primary mx-2"
                    data-bs-toggle="modal"
                    data-bs-target="#centermodal"
                  >
                    Unit Convertor
                  </button>
                <button className="btn bg-primary" onClick={handlenavigate}>
                  Log In
                </button>
               
                <UnitConvertor/>
              </div>
              {/* <div className="px-2">
                <button className="btn btn-success" type="submit">
                  Sign Up
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
