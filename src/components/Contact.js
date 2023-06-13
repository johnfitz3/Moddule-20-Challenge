import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Contact.css';

const Contact = () => {
  const handleEmailClick = () => {
    const footerElement = document.getElementById('footer');
    footerElement.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePhoneClick = () => {
    const footerElement = document.getElementById('footer');
    footerElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="icon-row">
          <Col>
            <div className="icon-container" onClick={handleEmailClick}>
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
              <span>Email</span>
            </div>
          </Col>
          <Col>
            <div className="icon-container" onClick={handlePhoneClick}>
              <FontAwesomeIcon icon={faPhone} size="2x" />
              <span>Phone</span>
            </div>
          </Col>
          <Col>
            <div className="icon-container">
              <FontAwesomeIcon icon={faUser} size="2x" />
              <span>GitHub</span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Contact;
