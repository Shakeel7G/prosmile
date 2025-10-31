import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import Slider from "react-slick";

const services = [
  { icon: "/assets/icons/cleaning.svg", title: "Teeth Cleaning", desc: "Gentle and thorough cleaning for healthy teeth." },
  { icon: "/assets/icons/whitening.svg", title: "Teeth Whitening", desc: "Brighten your smile safely and effectively." },
  { icon: "/assets/icons/orthodontics.svg", title: "Orthodontics", desc: "Correct alignment and straighten your teeth." },
  { icon: "/assets/icons/implants.svg", title: "Dental Implants", desc: "Restore missing teeth with confidence." },
  { icon: "/assets/icons/cosmetic.svg", title: "Cosmetic Dentistry", desc: "Enhance your smile aesthetically." },
  { icon: "/assets/icons/emergency.svg", title: "Emergency Care", desc: "Fast response for dental emergencies." },
];

const Services = () => {
  // Settings for mobile carousel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section className="services-section py-5" id="services" style={{ backgroundColor: "#f0f9ff" }}>
      <Container>
        <motion.h2 className="text-center fw-bold mb-5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          Our Services
        </motion.h2>

        {/* Desktop Grid */}
        <div className="d-none d-md-block">
          <Row>
            {services.map((service, idx) => (
              <Col md={4} key={idx} className="mb-4">
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <Card className="h-100 text-center border-0 shadow-sm">
                    <Card.Img variant="top" src={service.icon} style={{ width: "80px", margin: "20px auto" }} />
                    <Card.Body>
                      <Card.Title className="fw-bold">{service.title}</Card.Title>
                      <Card.Text>{service.desc}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>

        {/* Mobile Carousel */}
        <div className="d-block d-md-none">
          <Slider {...sliderSettings}>
            {services.map((service, idx) => (
              <div key={idx} className="p-3">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="text-center border-0 shadow-sm">
                    <Card.Img variant="top" src={service.icon} style={{ width: "80px", margin: "20px auto" }} />
                    <Card.Body>
                      <Card.Title className="fw-bold">{service.title}</Card.Title>
                      <Card.Text>{service.desc}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Services;
