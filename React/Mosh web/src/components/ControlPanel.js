import React from 'react';
// style
import '../styles/ControlPanel.css';
// img
import photo from '../images/ipad.png';
// icon
import growth from '../icons/growth.png';
import snap from '../icons/snap.png';
import wordpress from '../icons/wordpress.png';

const ControlPanel = () => {
  return (
    <section className="ControlPanel">
      <h2>User-friendly Control Panel</h2>
      <section className="ControlPanelContainer">
        <img data-aos="fade-right" src={photo} alt="photo" />
        <ul data-aos="fade-up" className="CPanelBenefits">
          <li>
            {/* icon  */}
            <img src={snap} alt="icon" />
            <div className='CPDescription'>
              <h3>Easy Start & Managed Updates</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                quisquam, ex nostrum vero voluptates dicta excepturi vel
                perspiciatis consequuntur ab.
              </p>
            </div>
          </li>
          <li>
            {/* icon  */}
            <img src={growth} alt="icon" />
            <div className='CPDescription'>
              <h3>Staging, GIT & WP-CLI</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                quisquam, ex nostrum vero voluptates dicta excepturi vel
                perspiciatis consequuntur ab.
              </p>
            </div>
          </li>
          <li>
            {/* icon  */}
            <img src={wordpress} alt="icon" />
            <div className='CPDescription'>
              <h3>Dynamic Caching & More</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                quisquam, ex nostrum vero voluptates dicta excepturi vel
                perspiciatis consequuntur ab.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default ControlPanel;
