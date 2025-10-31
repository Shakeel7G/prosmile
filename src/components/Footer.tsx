import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <footer style={{ background: "#00779c", color: "white", padding: "2rem 0" }}>
      <Container>
        <Row>
          <Col md={6}>
            <h5>ProSmile Dental</h5>
            <p>Ottery, Cape Town</p>
            <p>Phone: 021-555-1234</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p>
              Follow us:
              <a href="#" className="ms-2 text-white">Facebook</a> |
              <a href="#" className="ms-2 text-white">Instagram</a>
            </p>
          </Col>
        </Row>
        <hr className="border-light" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} ProSmile Dental. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
