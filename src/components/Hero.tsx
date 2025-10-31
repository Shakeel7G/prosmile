import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import heroImage from "../assets/docs.jpeg";

const Hero = () => (
  <section
    style={{
      background: "linear-gradient(to right, #00779c 0%, #00a9c6 100%)",
      color: "#fff",
      minHeight: "70vh",
      display: "flex",
      alignItems: "center",
      position: "relative",
    }}
  >
    <Container>
      <Row className="align-items-center">
        {/* Text Column */}
        <Col xs={12} md={6} className="text-center text-md-start mb-4 mb-md-0">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="display-5 fw-bold"
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

        {/* Image Column */}
        <Col xs={12} md={6} className="text-center position-relative">
          <motion.img
            src={heroImage}
            alt="Doctors"
            className="img-fluid rounded-4 shadow-lg"
            style={{
              maxHeight: "220px",
              width: "100%",
              objectFit: "cover",
              filter: "brightness(1.05) contrast(1.05)",
            }}
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.15)",
              borderRadius: "16px",
            }}
          />
        </Col>
      </Row>
    </Container>
  </section>
);

export default Hero;
