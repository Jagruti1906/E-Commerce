import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Navbar,
  NavItem,
  NavLink
} from "reactstrap";

class Navbars extends React.Component {
  render() {
    return (
      <>
        <Navbar
          className="navbar-horizontal navbar-dark bg-default"
          expand="lg"
        >
          <div className="ml-auto mr-4">
              <Link to="/admin/index"> 
              <i className="ni ni-basket mr-2" style={{color: "white"}}/>
              <span className="nav-link-inner--text" style={{color: "white"}}>Items</span>
              </Link>
          </div>
        </Navbar>
      </>
    );
  }
}

export default Navbars;