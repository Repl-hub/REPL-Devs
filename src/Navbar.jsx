import { Avatar, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = ({ logo }) => {
  const [state, setState] = useState({ clicked: false });

  const handelClick = () => {
    setState({ clicked: !state.clicked });
  };
  return (
    <>
      <p className="m-0 px-0 py-1 bg-warning text-dark text-center">
        To Register the <span className="text-primary fw-bolder">CSS Battle</span> &nbsp;<NavLink exact to="/hackathon" className="fst-italic text-danger text-decoration-none text-capitalize fw-bold"> click here! &nbsp;</NavLink>
      </p>
      <div className="col-md-12 col-12">
        <nav className="navbar navbar-expand-lg navbar-light mt-2">
          <div className="hamburger" onClick={handelClick}>
            <div className={state.clicked ? "line open" : "line"}></div>
          </div>
          <div className="logo">
            <IconButton>
              <Avatar src={logo} />
            </IconButton>
            REPL
          </div>
          <ul className={state.clicked ? "nav-links open" : "nav-links"}>
            <li
              onClick={handelClick}
              style={{ transition: "all 0.5s ease 0.2s" }}
            >
              <NavLink exact activeClassName="active" to="/">
                <IconButton>Home</IconButton>
              </NavLink>
            </li>

            <li
              onClick={handelClick}
              style={{ transition: "all 0.5s ease 0.2s" }}
            >
              <NavLink exact activeClassName="active" to="/about">
                <IconButton>About</IconButton>
              </NavLink>
            </li>

            <li
              onClick={handelClick}
              style={{ transition: "all 0.5s ease 0.2s" }}
            >
              <NavLink exact activeClassName="active" to="/project">
                <IconButton>Explore</IconButton>
              </NavLink>
            </li> 
            <li
              onClick={handelClick}
              style={{ transition: "all 0.5s ease 0.2s" }}
            >
              {/* <NavLink exact activeClassName="active" to="/hackathon">
                <IconButton>Hackathon</IconButton>
              </NavLink> */}
              <NavLink exact activeClassName="active" to="/feedback">
                <IconButton>FeedBack</IconButton>
              </NavLink>
            </li>

            <li
              onClick={handelClick}
              style={{ transition: "all 0.5s ease 0.2s" }}
            >
              <NavLink exact activeClassName="active" to="/contact">
                <IconButton>Contact</IconButton>
              </NavLink>
            </li>

            {/* <li
              onClick={handelClick}
              style={{ transition: "all 0.5s ease 0.2s" }}
            >
              <NavLink exact activeClassName="active" to="/ticket">
                <IconButton>Ticket</IconButton>
              </NavLink>
            </li> */}

          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
