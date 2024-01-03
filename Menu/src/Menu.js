import React, { Fragment } from 'react';

const Menu = ({ categories, changeCategory }) => {
  return (
    <div className='menu'>
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <div className="btn-container">
        {categories.map((category, index) =>
        <Fragment key={index}>
          <button className='filter-btn' onClick={() => changeCategory(category)}>{category}</button>
        </Fragment>
        )}
      </div>
    </div>
  );
};

export default Menu;
