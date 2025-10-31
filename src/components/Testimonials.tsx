import React from "react";
import Slider from "react-slick";
import { Card, Container } from "react-bootstrap";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Alice M.", text: "Best dental experience ever! Super friendly staff." },
  { name: "John D.", text: "My teeth have never looked better. Highly recommend!" },
  { name: "Sophie K.", text: "Fun and professional. Love this clinic!" }
];

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false
  };

  return (
    <section id="testimonials" className="py-5" style={{ background: "#e6f7ff" }}>
      <Container>
        <motion.h2 className="text-center mb-5" style={{ color: "#00d2ff" }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          What Our Patients Say
        </motion.h2>
        <Slider {...settings}>
          {testimonials.map((t, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05 }}>
              <Card className="shadow-sm text-center p-4 mx-3">
                <Card.Body>
                  <Card.Text>"{t.text}"</Card.Text>
                  <Card.Subtitle className="mt-3" style={{ color: "#3a7bd5" }}>- {t.name}</Card.Subtitle>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Testimonials;
