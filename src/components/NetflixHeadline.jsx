import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const NetflixHeadline = () => {
  return (
    <Container fluid className="px-5" data-bs-theme="dark">
      <Row>
        <Col xs={6} className="d-flex gap-5">
          <div xs="auto">
            <h3 style={{ color: "white" }}>TV Shows</h3>
          </div>
          <div>
            <DropdownButton variant="outline-light" id="dropdown-item-button" title="Genres">
              <Dropdown.Item as="button">Horror</Dropdown.Item>
              <Dropdown.Item as="button">Fantasy</Dropdown.Item>
              <Dropdown.Item as="button">Drama</Dropdown.Item>
            </DropdownButton>
          </div>
        </Col>
        <Col style={{ opacity: "0.7" }} xs="auto" className="ms-auto">
          <img className="head-icon" style={{ border: "1px solid #BFBFBF" }} src="filter.svg" alt="filter" />
          <img className="head-icon" style={{ border: "1px solid #BFBFBF" }} src="grid.svg" alt="grid" />
        </Col>
      </Row>
    </Container>
  );
};
export default NetflixHeadline;
