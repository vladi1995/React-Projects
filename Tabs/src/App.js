import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(result => {
        setData(result);
        setIsLoading(false);
      });
  }, []);

  const changeCurrentJob = (index) => {
    setCurrent(index);
  }

  const currentJob = data[current];

  return (
    <section className='section'>
      {isLoading ? <div className='loading'>
        <h2>Loading...</h2>
      </div> :
        <>
          <div className="title">
            <h2>Experience</h2>
            <div className="underline"></div>
          </div>
          <div className="jobs-center">
            <div className="btn-container">
              {data.map((job, index) =>
                <button key={job.id} className={`job-btn ${index === current && 'active-btn'}`} onClick={() => changeCurrentJob(index)}>{job.company}</button>
              )}
            </div>
            <div className="job-info">
              <h3>{currentJob.title}</h3>
              <h4>{currentJob.company}</h4>
              <div className="job-date">{currentJob.dates}</div>
              <div className="job-desc"></div>
              {currentJob.duties.map((duty, index) =>
                <div key={index} className='job-desc'>
                  <FaAngleDoubleRight className='job-icon' />
                  <p>{duty}</p>
                </div>)}
            </div>
          </div>
          <button className='btn'>More Info</button>
        </>
      }
    </section>
  );
}

export default App
