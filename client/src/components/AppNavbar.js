import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import RegisterModal from "./auth/RegisterModal";

class AppNavBar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOepn
    });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <NavbarBrand href="/">SureKanDo List</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <RegisterModal />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AppNavBar;
