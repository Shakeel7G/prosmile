import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const BookingModal: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={{
        background: "linear-gradient(90deg, #00d2ff 0%, #00ffa3 100%)",
        border: "none",
        fontWeight: 600
      }} onClick={handleShow}>
        Book Appointment
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Book an Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDate">
              <Form.Label>Preferred Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Button style={{
              background: "linear-gradient(90deg, #00d2ff 0%, #00ffa3 100%)",
              border: "none",
              fontWeight: 600,
              width: "100%"
            }} type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BookingModal;
