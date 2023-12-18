import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);

  const changeView = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        {people.map(person => <List key={person.id} {...person} />)}
        <button onClick={changeView}>Clear All</button>
      </section>
    </main>  
  );
}

export default App;
