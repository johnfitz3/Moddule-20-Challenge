import React, { useRef, useEffect } from "react";
import "../styles/Home.css";
import "../styles/Background.css";
import { Image } from "react-bootstrap";
import MyImage from '../images/myimage.jpg';

const Home = () => {
  const shapesRef = useRef([]);

  useEffect(() => {
    const shapes = shapesRef.current;

    const checkCollision = (shape) => {
      for (let i = 0; i < shapes.length; i++) {
        const otherShape = shapes[i];
        if (shape !== otherShape) {
          const dx = shape.offsetLeft - otherShape.offsetLeft;
          const dy = shape.offsetTop - otherShape.offsetTop;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 140) {
            shape.style.left = `${Math.random() * 138}%`;
            shape.style.top = `${Math.random() * 200}%`;
            checkCollision(shape); 
        }
      }
      }
    };

    shapes.forEach((shape) => {
      checkCollision(shape);
    });
  }, []);

  return (
    <div className="background">
      {Array.from({ length: 30 }).map((_, index) => (
        <div
          key={index}
          ref={(el) => (shapesRef.current[index] = el)}
          className="shape"
          style={{
            '--hue': Math.random() * 60,
            '--saturation': Math.random(),
            '--lightness': Math.random(),
            '--rotation': `${Math.random() * 360}deg`,
            top: `${Math.random() * 200}%`,
            left: `${Math.random() * 138}%`
          }}
        />
      ))}

      <div className="body-container">
        <div className="section-main">
          <div className="main-page-container">
            <div className="left-container">
              <div className="text-container">
                <p className="title">
                  John
                  <br />
                  <span className="fancy">Fitzgerald</span>
                </p>
                <p className="description">Front-end Dev</p>
              </div>
              <div className="img-container">
                <Image src={MyImage} alt="MyImage" className="custom-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
