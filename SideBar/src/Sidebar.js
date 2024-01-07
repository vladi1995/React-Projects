import React from 'react';
import logo from './logo.svg';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const {isSideBarOpen, closeSideBar} = useGlobalContext();

  return (
    // show side-bar
    <aside className={`${isSideBarOpen ? 'show-sidebar sidebar' : 'sidebar'}`}>
      <section className='sidebar-header'>
        <img src={logo} className='logo' alt="logo" />
        <button className='close-btn' onClick={closeSideBar}><FaTimes /></button>
      </section>
      <ul className='links'>
        {links.map(link => <li key={link.id}><a href={link.url}>{link.icon} {link.text}</a></li>)}
      </ul>

      <ul className='social-icons'>
        {social.map(link => <li key={link.id}><a href={link.url}>{link.icon}</a></li>)}
      </ul>
    </aside>
  );
};

export default Sidebar;
