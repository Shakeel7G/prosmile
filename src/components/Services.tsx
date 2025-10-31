import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const services = [
  { title: "Teeth Whitening", description: "Brighten your smile safely." },
  { title: "Dental Implants", description: "Restore your perfect teeth." },
  { title: "Orthodontics", description: "Straighten teeth with modern braces." },
  { title: "General Dentistry", description: "Checkups and cleanings." }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-5">
      <Container>
        <motion.h2 className="text-center text-prosmile mb-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Our Services
        </motion.h2>
        <Row className="g-4">
          {services.map((s, idx) => (
            <Col md={3} key={idx}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card className="shadow-sm p-3 h-100">
                  <Card.Body>
                    <Card.Title style={{ color: "#00779c" }}>{s.title}</Card.Title>
                    <Card.Text>{s.description}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
