import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux"
import {logout} from "../../actions/auth"
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media
} from "reactstrap";

const AdminNavbar = ({logout, brandText}) => {
    return (
      <>
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
          <Container fluid>
            <Link
              className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
              to="/"
            >
              {brandText}
            </Link>
            <Nav className="align-items-center d-none d-md-flex" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle className="pr-0" nav>
                  <Media className="align-items-center">
                    <span className="text-uppercase">
                      <p>Category</p>
                    </span>
                  </Media>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>
                  <DropdownItem to="/cart" tag={Link}>
                    <i className="ni ni-cart" />
                    <span>Chocolate</span>
                  </DropdownItem>
                  <DropdownItem to="/orders" tag={Link}>
                    <i className="ni ni-shop" />
                    <span>Chips</span>
                  </DropdownItem>
                  <DropdownItem to="/orders" tag={Link}>
                    <i className="ni ni-shop" />
                    <span>Drinks</span>
                  </DropdownItem>
                  <DropdownItem to="/orders" tag={Link}>
                    <i className="ni ni-shop" />
                    <span>Noodles and Pasta</span>
                  </DropdownItem>
                  <DropdownItem to="/orders" tag={Link}>
                    <i className="ni ni-shop" />
                    <span>Dairy</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <Nav className="align-items-center d-none d-md-flex" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle className="pr-0" nav>
                  <Media className="align-items-center">
                    <span className="avatar avatar-sm rounded-circle" style={{color: "black"}}>
                      <i className="ni ni-single-02" />
                    </span>
                  </Media>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>
                  <DropdownItem className="noti-title" header tag="div">
                    <h6 className="text-overflow m-0">Welcome!</h6>
                  </DropdownItem>
                  <DropdownItem to="/cart" tag={Link}>
                    <i className="ni ni-cart" />
                    <span>My Cart</span>
                  </DropdownItem>
                  <DropdownItem to="/orders" tag={Link}>
                    <i className="ni ni-shop" />
                    <span>My Orders</span>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem to="/" tag={Link} onClick={e => {e.preventDefault();
                  logout()}}>
                    <i className="ni ni-user-run" />
                    <span>Logout</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
}

export default connect(null, {logout})(AdminNavbar);
