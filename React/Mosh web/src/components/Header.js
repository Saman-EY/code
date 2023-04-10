import React, { useState } from 'react';
// style
import '../styles/Header.css';
// images
import moshLogo from '../images/logo.png';
import banner from '../images/banner.png';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  let [navbar, setnavbar] = useState(false);

  return (
    <header>
      <section className="HeaderSection">
        {/* NAVIGATION  */}
        <nav className="NavContainer">
          <a  href="#" className="LogoContainer">
            <img src={moshLogo} alt="logo" />
          </a>
          <span
            className={navbar ? 'MenuIcon active' : 'MenuIcon'}
            onClick={() => setnavbar(!navbar)}
          >
            <FontAwesomeIcon icon={faBars} />
          </span>
          <ul className={navbar ? 'NavLinks' : 'NavLinks NavCollapse'}>
            <a href="#">Hosting</a>
            <a href="#">VPS</a>
            <a href="#">Domain</a>
            <a href="#">Pricing</a>
          </ul>
        </nav>

        {/* Header content  */}
        <div className="HeaderContent">
          <div className="HeaderDescription">
            <h2 data-aos="zoom-out">Cloud Hosting for Pros</h2>
            <p>Deploy yout websites in less than 60 seconds</p>
            <button>GET STARTED</button>
          </div>

          <img data-aos="zoom-in" className="Banner" src={banner} alt="banner" />
        </div>
      </section>
    </header>
  );
};

export default Header;
