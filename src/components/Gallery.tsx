import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const galleryImages = [
  "/images/clinic1.jpg",
  "/images/clinic2.jpg",
  "/images/clinic3.jpg",
  "/images/clinic4.jpg"
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-5" style={{ background: "#ffffff" }}>
      <Container>
        <motion.h2 className="text-center text-prosmile mb-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Our Clinic Gallery
        </motion.h2>
        <Row className="g-4">
          {galleryImages.map((img, idx) => (
            <Col md={3} sm={6} key={idx}>
              <motion.div whileHover={{ scale: 1.05, y: -5 }}>
                <Card className="shadow-sm">
                  <Card.Img variant="top" src={img} alt={`Gallery ${idx + 1}`} />
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;
