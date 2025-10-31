import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-5" style={{ background: "#e6f7ff" }}>
      <Container>
        <motion.h2 className="text-center mb-5" style={{ color: "#00d2ff" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Contact Us
        </motion.h2>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your message..." />
              </Form.Group>
              <Button style={{
                background: "linear-gradient(90deg, #00d2ff 0%, #00ffa3 100%)",
                border: "none",
                fontWeight: 600,
                width: "100%"
              }} type="submit">Send Message</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
