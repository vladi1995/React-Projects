import React, { useState } from 'react';
import data from './data';
function App() {
  const [lorem, setLorem] = useState([]);
  const [count, setCount] = useState(0);

  const changeCount = (e) => {
    setCount(e.target.value);
  }

  const generateLorem = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    } else if (count > 8) {
      amount = 8;
    }
    setLorem(data.slice(0, amount));
  }

  return (
    <main>
      <section className='section-center'>
        <h3>Tired of boring lorem ipsum?</h3>
        <form className="lorem-form">
          <label>Paragraphs:</label>
          <input type="text" name="paragraphs" value={count} onChange={changeCount} />
          <button className='btn' onClick={generateLorem}>Generate</button>
        </form>
        <div className="result">
          {lorem.map((lor, index) => <p key={index}>{lor}</p>)}
        </div>
      </section>
    </main>
  );
}

export default App;
