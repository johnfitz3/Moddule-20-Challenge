import React, { useState } from 'react';
import Title from './Title';
import { Link, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faInfoCircle, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';
import '../styles/Header.css';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Work from './Work';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);

  const handleIconClick = (path) => {
    if (path === '/contact') {
      const footerElement = document.getElementById('footer');
      footerElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(path);
      setCurrentPage(path);
    }
  };

  const isHomePage = currentPage === '/';

  return (
    <div>
      {isHomePage && <Title text="Welcome to My Portfolio" />}
      <div className="header-container">
        <div className="nav-icon icon-home" onClick={() => handleIconClick('/')}>
          <FontAwesomeIcon icon={faHouse} />
        </div>
        <div
          className={`nav-icon ${isHomePage ? 'icon-about' : 'icon-projects'}`}
          onClick={() => handleIconClick(isHomePage ? '/about' : '/work')}
        >
          <FontAwesomeIcon icon={isHomePage ? faInfoCircle : faCode} />
        </div>
        <div className={`nav-icon ${currentPage === '/contact' ? '' : 'icon-contact'}`} onClick={() => handleIconClick('/contact')}>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>

        <div className="section-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Header;
