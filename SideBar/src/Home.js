import React from 'react';
import { FaBars } from 'react-icons/fa';
import Modal from './Modal';
import { useGlobalContext } from './context';

const Home = () => {
  const {openSideBar, openModal} = useGlobalContext();

  return (
    <main>
      <button className='sidebar-toggle' onClick={openSideBar}>
        <FaBars />
      </button>
      <button className='btn' onClick={openModal}>Show modal</button>
    </main>
  );
};

export default Home;
