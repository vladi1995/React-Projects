import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({color, index}) => {
  const [alert, setAlert] = useState(false);
  const renderedValue = rgbToHex(color.rgb[0], color.rgb[1], color.rgb[2]);

  useEffect(()=>{
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <div onClick={()=>{setAlert(true); navigator.clipboard.writeText(renderedValue)}} className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor: renderedValue}}>
      <p className="percent-value">
        {color.weight}%
      </p>
      <p className="color-value">
        {renderedValue}
      </p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </div>
  );
}

export default SingleColor
