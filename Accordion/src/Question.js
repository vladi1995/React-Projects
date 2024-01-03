import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({
  id,
  title,
  info
}) => {
  const [btnClicked, setBtnClicked] = useState(false);

  const changeQuestion = () => {
    setBtnClicked(() => !btnClicked);
  }

  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        {btnClicked ? <AiOutlineMinus className='btn' onClick={changeQuestion} /> : <AiOutlinePlus className='btn' onClick={changeQuestion} />}

      </header>
      {btnClicked && <p>{info}</p>}
    </div>
  );
};

export default Question;
