import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const Contact = () => (
  <section id="contact" className="py-5">
    <Container>
      <motion.h2 className="text-center mb-5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        Contact Us
      </motion.h2>
      <Row className="justify-content-center">
        <Col md={8}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your message" />
              </Form.Group>
              <Button variant="primary" type="submit">Send Message</Button>
            </Form>
          </motion.div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Contact;
