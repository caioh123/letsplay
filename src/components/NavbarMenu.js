import { Navbar, Container } from "react-bootstrap";
import React from "react";

const NavbarMenu = () => {
  return (
    <Navbar bg="dark">
      <Container>
        <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1">Letsplay</span>
        </nav>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
