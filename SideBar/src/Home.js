import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import Modal from './Modal';

const Home = () => {
  return (
    <main>
      <button className='sidebar-toggle'>
        <FaBars />
      </button>
      <button className='btn'>Show modal</button>

    </main>
  );
};

export default Home;
