import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({color}) => {
  const renderedValue = rgbToHex(color.rgb[0], color.rgb[1], color.rgb[2]);
  return (
    <div className="color" style={{backgroundColor: renderedValue}}>
      <p className="percent-value">
        {color.weight}%
      </p>
      <p className="color-value">
        {renderedValue}
      </p>
    </div>
  );
}

export default SingleColor
