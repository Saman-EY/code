import React, { useState } from 'react';
//img
import img1 from '../images/easy.jpg';
import img2 from '../images/fast.jpg';
import img3 from '../images/wordpress.jpg';
import img4 from '../images/support.jpg';
// icon
import clock from '../icons/clock.png';
import computer from '../icons/computer.png';
import easy from '../icons/easy.png';
import wordpress from '../icons/wordpress.png';
// style
import '../styles/CloudHost.css';
// component
import CloudHostCard from './CloudHostCard';

const CloudHost = () => {
  let [state, setstate] = useState({
    data: [
      { id: 1, icon: easy, header: 'Super Easy to Use', image: img1 },
      { id: 2, icon: computer, header: 'Simply Fast Websites', image: img2 },
      { id: 3, icon: wordpress, header: 'Wordpress Made Easy', image: img3 },
      { id: 4, icon: clock, header: '24/7 Expert Support', image: img4 }
    ]
  });

  let { data } = state;

  return (
    <section className="HostSection">
      <div className='HostSectionTitle' >
        <h3>Host on the Cloud to Keep Growing</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
          voluptatem.
        </p>
      </div>
      <div className="HostSectionContainer">
        <CloudHostCard type="normal" icon={data[0].icon} header={data[0].header} image={data[0].image} />
        <CloudHostCard type="reverse" icon={data[1].icon} header={data[1].header} image={data[1].image} />
        <CloudHostCard type="normal" icon={data[2].icon} header={data[2].header} image={data[2].image} />
        <CloudHostCard type="reverse" icon={data[3].icon} header={data[3].header} image={data[3].image} />
      </div>
    </section>
  );
};

export default CloudHost;
