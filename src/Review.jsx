import { BiSolidQuoteRight } from 'react-icons/bi';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';
import reviews from './data.js';

const Review = () => {
  const [user, setUser] = useState(0);
  const { name, job, image, text } = reviews[user];

  const prevUser = () => {
    user < 1 ? setUser(reviews.length - 1) : setUser(0);
  };
  const nextUser = () => {
    user < reviews.length - 1 ? setUser(user + 1) : setUser(0);
  };
  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteLeft />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevUser}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextUser}>
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
};

export default Review;
