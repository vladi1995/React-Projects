import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, removeItem }) => {
  return (
    <>
      {tours.map(tour => <Tour key={tour.id} {...tour} removeItem={removeItem} />)}
    </>
  );
};

export default Tours;
