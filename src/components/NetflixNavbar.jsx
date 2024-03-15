import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NetflixNavbar() {
  return (
    <Navbar expand="md" style={{ backgroundColor: "black" }} data-bs-theme="dark">
      <Container fluid className="px-5">
        <Navbar.Brand href="#home">
          <img src="netflix_logo.png" alt="logo" style={{ width: "100px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tv-shows">TV Shows</Nav.Link>
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#recently-added">Recently Added</Nav.Link>
            <Nav.Link href="#my-list">MyList</Nav.Link>
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
