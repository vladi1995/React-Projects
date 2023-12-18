import React, { useState } from 'react';

const Tour = ({
  id,
  name,
  info,
  image,
  price,
  removeItem
}) => {
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>

      <p>{info}</p>
      <button className="delete-btn" onClick={() => removeItem(id)}>Not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
