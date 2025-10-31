import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const Contact = () => (
  <section id="contact" className="py-5" style={{ background: "#f0f8ff" }}>
    <Container>
      <motion.h2
        className="text-center mb-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch
      </motion.h2>

      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <motion.form
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="shadow-lg p-4 rounded-4 bg-white"
          >
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your message" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Send Message
            </Button>
          </motion.form>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Contact;
