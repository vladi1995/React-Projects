import React from 'react';
import { FaTimes } from 'react-icons/fa';
const Modal = () => {
  return (
    <>
      {/* show modal */}
      <section className={`modal-overlay`}>
        <div className='modal-container'>
          <h3>Modal Content</h3>
          <button className='close-modal-btn'>
            <FaTimes />
          </button>
        </div>
      </section>
    </>
  );
};

export default Modal;
