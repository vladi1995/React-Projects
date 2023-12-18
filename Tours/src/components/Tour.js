import React, { useState } from 'react';

const Tour = ({
  id,
  name,
  info,
  image,
  price,
  removeItem
}) => {
  const [showMore, setShowMore] = useState(false);

  const changeShowMore = () => {
    setShowMore(showMore => !showMore);
  };

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>

      <p>{showMore ? info : `${info.slice(0,200)}...`} <button onClick={changeShowMore}>{showMore ? 'Show less' : 'Show more'}</button></p>
      <button className="delete-btn" onClick={() => removeItem(id)}>Not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
