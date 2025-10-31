import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import { motion } from "framer-motion";
import BookingModal from "./BookingModal";

const Hero: React.FC = () => {
  return (
    <section
      style={{
        minHeight: "70vh",
        background: "linear-gradient(135deg, #00779c 0%, #00c6ff 100%)",
        color: "white",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Side */}
          <Col md={6}>
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ fontSize: "3rem", fontWeight: 700 }}
            >
              Brighten Your Smile, Brighten Your Life
            </motion.h1>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{ fontSize: "1.25rem", maxWidth: "500px", marginTop: "1rem" }}
            >
              Modern dental care with a friendly touch. Meet our expert team today.
            </motion.p>
            <motion.div whileHover={{ scale: 1.05 }}>
              <BookingModal />
            </motion.div>
          </Col>

          {/* Right Side */}
          <Col md={6} className="text-center">
            <motion.img
              src="/images/docs.jpeg"
              alt="Our Team"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ maxWidth: "100%", borderRadius: "1rem", boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
