import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faPaintBrush, faDesktop } from '@fortawesome/free-solid-svg-icons';
import '../styles/About.css';
import '../styles/Background.css';

const About = () => {
  return (
    <div className="background">
      {Array.from({ length: 30 }).map((_, index) => (
        <div
          key={index}
          className="shape"
          style={{
            '--hue': Math.random() * 560,
            '--saturation': Math.random(),
            '--lightness': Math.random(),
            '--rotation': `${Math.random() * 360}deg`,
            top: `${Math.random() * 200}%`,
            left: `${Math.random() * 138}%`
          }}
        />
      ))}

      <Container className="about-container">
        <Row>
          <Col>
            <h2 className="about-heading">About Me</h2>
            <p className="about-text">
              Hello, my name is John FitzGerald. I am a 19-year-old front-end developer based in Naples, Florida. I am passionate about creating visually appealing and user-friendly websites using modern front-end frameworks like React.
            </p>
            <p className="about-text">
              With a strong foundation in HTML, CSS, and JavaScript, I strive to deliver high-quality code and create engaging web experiences. I enjoy working on challenging projects and continuously learning new technologies to enhance my skills.
            </p>
            <Row className="about-sections">
              <Col>
                <div className="about-section">
                  <div className="about-icon">
                    <FontAwesomeIcon icon={faLightbulb} />
                  </div>
                  <h3 className="about-section-title">Quick Learner</h3>
                  <p className="about-section-text">
                    I learn fast and solve problems efficiently. I enjoy tackling complex challenges and expanding my knowledge in dynamic environments.
                  </p>
                </div>
              </Col>
              <Col>
                <div className="about-section">
                  <div className="about-icon">
                    <FontAwesomeIcon icon={faPaintBrush} />
                  </div>
                  <h3 className="about-section-title">Creative & Artistic</h3>
                  <p className="about-section-text">
                    I'm creative with an eye for design. I craft visually appealing websites, exploring color, typography, and layout concepts for exceptional user experiences.
                  </p>
                </div>
              </Col>
              <Col>
                <div className="about-section">
                  <div className="about-icon">
                    <FontAwesomeIcon icon={faDesktop} />
                  </div>
                  <h3 className="about-section-title">Responsive Webpages</h3>
                  <p className="about-section-text">
                    I build responsive webpages that adapt to different devices and screen sizes. Providing a consistent user experience is important to me.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="about-text bottom-paragraph">
              When I'm not coding, you can find me exploring new coffee shops, playing guitar, or going on outdoor adventures. I love combining my creativity and technical skills to bring ideas to life and make a positive impact through web development. If you're looking for a dedicated and passionate front-end developer, I would love to connect and collaborate on exciting projects.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
