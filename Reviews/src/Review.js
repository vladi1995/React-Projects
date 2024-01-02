import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [user, setUser] = useState(people[0]);

  const onUserIncrement = (id) => {
    if (id === people.length) {
      setUser(people[0]);
    } else {
      setUser(people[id]);
    }
  }

  const onUserDecrement = (id) => {
    if (id === 0) {
      setUser(people[people.length - 1]);
    } else {
      setUser(people[id-1]);
    }
  }

  const onUserRandom = () => {
    const min = 0;
    const max = 4;
    const randomNumber = Math.floor(Math.random() * (max-min) + min);
    setUser(people[randomNumber]);
  }

  return (
    <div className="review">
      <div className="img-container">
        <img src={user.image} className="person-img" />
        <div className="quote-icon">
          <FaQuoteRight />
        </div>
      </div>
      <h4 className="author">{user.name}</h4>
      <p className='job'>{user.job}</p>
      <p className='info'>{user.text}</p>
      <FaChevronLeft className='prev-btn' onClick={() => onUserDecrement(user.id - 1)} />
      <FaChevronRight className='next-btn' onClick={() => onUserIncrement(user.id)} />
      <div>
        <button className='random-btn' onClick={() => onUserRandom()}>Surprise Me</button>
      </div>
    </div>
  );
};

export default Review;
