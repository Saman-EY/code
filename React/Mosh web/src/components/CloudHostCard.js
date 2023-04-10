import React from 'react';
import '../styles/CloudHostCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';

const CloudHostCard = ({ type, icon, header, image }) => {
  return (
    <div
      className={type === 'reverse' ? 'CloudHostCard reverse' : 'CloudHostCard'}
    >
      <div data-aos="fade-left" className="CloudHostCardBody">
        <span>
          <img src={icon} alt="" />
        </span>
        <h4>{header}</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          obcaecati vel ad unde est lorem ip illo at. Labore excepturi officia
          dolores!
        </p>
        <a href="">
          LEARN MORE{' '}
          <span>
            <FontAwesomeIcon icon={faRightLong} />
          </span>
        </a>
      </div>
      <img data-aos="fade-right" src={image} alt="banner" />
    </div>
  );
};

export default CloudHostCard;
