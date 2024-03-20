import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useLocation } from "react-router-dom";

function NetflixNavbar() {
  const location = useLocation();

  return (
    <Navbar expand="md" style={{ backgroundColor: "black" }} data-bs-theme="dark">
      <Container fluid className="px-5">
        <Navbar.Brand href="#home">
          <img src="netflix_logo.png" alt="logo" style={{ width: "100px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex">
            <Link className={location.pathname === `/` ? "nav-link active" : "nav-link"} to="/">
              Home
            </Link>
            <Link className={location.pathname === `/tv-shows` ? "nav-link active" : "nav-link"} to="tv-shows">
              TV Shows
            </Link>
            <Link className={location.pathname === `/movies` ? "nav-link active" : "nav-link"} to="movies">
              Movies
            </Link>
            <Link
              className={location.pathname === `/recently-added` ? "nav-link active" : "nav-link"}
              to="recently-added"
            >
              Recently Added
            </Link>
            <Link className={location.pathname === `/my-list` ? "nav-link active" : "nav-link"} to="my-list">
              MyList
            </Link>
          </Nav>
          <Nav className="ms-auto d-flex gap-3 align-items-center">
            <img className="" style={{ cursor: "pointer" }} src="search.svg" alt="search" />
            <span className="" style={{ color: "#8a8c8e", cursor: "pointer" }}>
              KIDS
            </span>
            <img className="" style={{ cursor: "pointer" }} src="bell.svg" alt="search" />
            <NavDropdown
              align="end"
              title={<img style={{ width: "30px", borderRadius: "50%" }} src="avatar.png" alt="user"></img>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Your Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NetflixNavbar;
