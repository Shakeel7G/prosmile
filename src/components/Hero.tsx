import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import heroImage from "../assets/docs.jpeg";

const Hero = () => (
  <section
    style={{
      background: "linear-gradient(to right, #00779c 0%, #00a9c6 100%)",
      color: "#fff",
      minHeight: "80vh",
      display: "flex",
      alignItems: "center",
    }}
  >
    <Container>
      <Row className="align-items-center">
        <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="display-4 fw-bold"
          >
            Welcome to ProSmile Dentistry
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="lead"
          >
            Professional dental care for a brighter, healthier smile.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Button href="#contact" variant="light" size="lg">
              Book an Appointment
            </Button>
          </motion.div>
        </Col>
        <Col md={6} className="text-center">
          <motion.img
            src={heroImage}
            alt="Doctors"
            className="img-fluid rounded-4 shadow-lg"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </Col>
      </Row>
    </Container>
  </section>
);

export default Hero;
