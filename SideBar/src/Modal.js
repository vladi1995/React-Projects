import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Modal = () => {
  const {isModalOpen, closeModal} = useGlobalContext();

  return (
    <>
      <section className={`${isModalOpen ? 'show-modal modal-overlay' : 'modal-overlay'}`}>
        <div className='modal-container'>
          <h3>Modal Content</h3>
          <button className='close-modal-btn' onClick={closeModal}>
            <FaTimes />
          </button>
        </div>
      </section>
    </>
  );
};

export default Modal;
