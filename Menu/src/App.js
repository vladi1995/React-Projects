import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const categories = [...new Set(items.map(item => item.category))];
  categories.unshift('all');

  const [category, setCategory] = useState('all');

  const changeCategory = (newCategory) => {
    setCategory(newCategory);
  }

  const filteredItems = category === 'all' ? items : items.filter(item => item.category === category);

  return (
    <>
    <Menu categories={categories} changeCategory={changeCategory} />
    <div className="section-center">
      {filteredItems.map(item => <Categories key={item.id} {...item} />)}
    </div>
    </>
  );
}

export default App;
