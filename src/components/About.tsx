import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about" className="py-5" style={{ background: "#f1f9ff" }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <motion.img
              src="/images/place.webp"
              alt="Clinic"
              style={{ width: "100%", borderRadius: "1rem" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
          </Col>
          <Col md={6}>
            <motion.h2 className="text-prosmile mb-3" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
              About ProSmile
            </motion.h2>
            <motion.p initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
              At ProSmile, we combine modern dental technology with compassionate care. Our mission is to make every patient feel confident and cared for.
            </motion.p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
