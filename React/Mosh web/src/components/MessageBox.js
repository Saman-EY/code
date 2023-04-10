import React from 'react';
// style
import '../styles/Message.css';

const MessageBox = () => {
  return (
    <section className="MessageSection">
      <h4>Ready to Get Started?</h4>
      <div className='MessageDes'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          nostrum praesentium ipsam soluta recusandae expedita ex illo nesciunt!
          Temporibus, eius?
        </p>
        <button>GET STARTED</button>
      </div>
    </section>
  );
};

export default MessageBox;
