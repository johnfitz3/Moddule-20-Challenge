import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Work.css';
import '../styles/Background.css';
import noteTaker from '../images/Opera Snapshot_2023-06-13_180844_localhost.png';
import weatherDashboard from '../images/Screenshot 2023-03-14 221205.png';
import animeExplorer from '../images/Screenshot_20230222_091359.png';

const Work = () => {
  const projects = [
    { id: 1, title: 'Note Taker', image: noteTaker },
    { id: 2, title: 'Weather Dashboard', image: weatherDashboard },
    { id: 3, title: 'Anime Explorer', image: animeExplorer },
  ];

  const [hoveredItemId, setHoveredItemId] = useState(null);

  const handleMouseEnter = (itemId) => {
    setHoveredItemId(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItemId(null);
  };

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
      <div className="work-container">
        <Container>
          <h2 className="work-heading">My Work</h2>
          <div className="work-grid">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`work-item ${hoveredItemId === project.id ? 'hovered' : ''}`}
                onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={handleMouseLeave}
              >
                <img src={project.image} alt={project.title} className="work-image" />
                <div className="work-overlay">
                  <div className="work-title">{project.title}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Work;
