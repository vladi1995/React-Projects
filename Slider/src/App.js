import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [index, setIndex] = useState(0);
  const [user, setUser] = useState([]);

  useEffect(() => {
    setUser(data[index]);
  }, [index]);

  const prevUser = () => {
    if (index <= 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  const nextUser = () => {
    if (index == data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  setTimeout(() => {
    // nextUser();
  }, 5000);

  return (
    <>
      <section className='section'>
        <div className="title">
          <h2><span>/</span>Reviews</h2>
        </div>

        <div className='section-center'>
          <article>
            <img src={user.image} className='person-img' />
            <div className='title'>
              <h4>{user.name}</h4>
              <p className='title'>{user.title}</p>
              <p className='text'>{user.quote}</p>
              <FaQuoteRight className='icon' />
            </div>
          </article>
          <FiChevronLeft className='prev' onClick={prevUser} />
          <FiChevronRight className='next' onClick={nextUser} />
        </div>
      </section>
    </>
  );
}

export default App;
