import React, { useEffect } from 'react';

const Alert = ({alert}) => {
  return (
    <div className='alert'>
        <div className={`alert-${alert.mode}`}>{alert.text}</div>
    </div>
  );
};

export default Alert;
