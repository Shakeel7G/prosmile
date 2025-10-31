import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="py-4 text-center text-white"
      style={{ backgroundColor: "#00779c" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <p className="mb-0">&copy; {new Date().getFullYear()} ProSmile Dental. All rights reserved.</p>
      </Container>
    </motion.footer>
  );
};

export default Footer;
