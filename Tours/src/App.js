import React, { useState, useEffect } from 'react';
import * as tourService from './services/tourService';
import Loading from './components/Loading';
import Tours from './components/Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    tourService.getAllTours()
      .then(tours => {
        setTours(tours);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  const removeItem = (id) => {
    setTours(tours => tours.filter(tour => tour.id !== id));
  };

  return (
    <main>
      {loading ? <Loading /> :
        <>
          <div className="title">
            <h2>Our Tours</h2>
            <div className="underline"></div>
          </div>

          <Tours tours={tours} removeItem={removeItem} />
        </>
      };
    </main>
  );
};

export default App;
