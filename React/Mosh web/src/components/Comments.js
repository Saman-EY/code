import React from 'react';
// style
import '../styles/Comments.css';
// image
import profile from '../images/profile.jpg';
import icon from '../icons/quotes.png';
const Comments = () => {
  return (
    <section data-aos="zoom-inn" className="CommentSection">
      <h3>What our Customers are Saying</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, ipsam.
      </p>
      <div className="CommentContainer">
        <div className="comment-img">
          <img src={profile} alt="profile" />
          <span>
            <img src={icon} alt="" />
          </span>
        </div>
        <blockquote className="comment-description">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            optio officiis dolore earum error eaque perferendis laudantium sed
            praesentium dolorum.
          </p>
          <div className="comment-info">
            <span>John Smith</span>
            <span>ABC Company</span>
          </div>
        </blockquote>
      </div>
    </section>
  );
};

export default Comments;
