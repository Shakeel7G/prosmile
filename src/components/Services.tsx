import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const services = [
  {
    title: "Teeth Whitening",
    description: "Brighten your smile safely and effectively.",
    icon: "✨",
  },
  {
    title: "Dental Implants",
    description: "Restore missing teeth with natural-looking implants.",
    icon: "🦷",
  },
  {
    title: "Orthodontics",
    description: "Straighten your teeth with modern braces and aligners.",
    icon: "😃",
  },
];

const Services = () => (
  <section id="services" className="py-5" style={{ background: "#f7f9fc" }}>
    <Container>
      <h2 className="text-center mb-5">Our Services</h2>
      <Row>
        {services.map((service, idx) => (
          <Col xs={12} md={4} className="mb-4" key={idx}>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="shadow-sm h-100 text-center p-3">
                <div style={{ fontSize: "2rem" }}>{service.icon}</div>
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Services;
