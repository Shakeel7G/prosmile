import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import aboutImage from "../assets/place.webp";

const About = () => (
  <section id="about" className="py-5">
    <Container>
      <Row className="align-items-center">
        <Col md={6} className="mb-4 mb-md-0">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            About ProSmile
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            At ProSmile Dentistry, we combine expertise with a friendly environment to give you the best care possible.
          </motion.p>
        </Col>
        <Col md={6} className="text-center">
          <motion.img
            src={aboutImage}
            alt="About ProSmile"
            className="img-fluid rounded-4 shadow-lg"
            style={{ maxHeight: "250px", width: "100%", objectFit: "cover" }}
            initial={{ y: -5 }}
            whileInView={{ y: 5 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;
