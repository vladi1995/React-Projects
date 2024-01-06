import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [colors, setColors] = useState(new Values('#f15025').all(10));

  const onColorChange = (e) => {
    setColor(e.target.value);
    setError(false);
    colorCheck(color);
  };

  const submitColor = (e) => {
    e.preventDefault();
    try {
      let newValues = new Values(color).all(10);
      setColors(newValues);
      colorCheck(color);
    } catch (error) {
      setError(true);
    }
  };

  const colorCheck = (color) => {
    if (!color.startsWith('#')) {
      setError(true);
    } else if (color.length != 4 && color.length != 7) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={submitColor}>
          <input type="text" name="color" value={color} onChange={onColorChange} onBlur={onColorChange} className={error ? 'error' : ''} />
          <input type="submit" value="Submit" className='btn' />
        </form>

      </section>
      <section className="colors">
        {colors.map((eachColor, index) => <SingleColor key={index} color={eachColor} index={index} />)}
      </section>
    </>
  );
}

export default App
