import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavigationLink() {
  return (
    <Navbar expand="lg" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand>
          <Link to={"/"} className="navbar-brand">
            My Article
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to={"/"} className="nav-link">
              All
            </Link>
            <Link to={"article/category/html-css"} className="nav-link">
              HTML & CSS
            </Link>
            <Link to={"article/category/javascript"} className="nav-link">
              Javascript
            </Link>
            <Link to={"article/category/php"} className="nav-link">
              Php
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
