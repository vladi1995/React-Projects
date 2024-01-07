import React from 'react';
import logo from './logo.svg';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';

const Sidebar = () => {
  return (
    // show side-bar
    <aside className={`siderbar`}>
      <section className='sidebar-header'>
        <img src={logo} className='logo' alt="logo" />
        <button className='close-btn'><FaTimes /></button>
      </section>
      <ul className='links'>
        {links.map(link => <li><a href={link.url}>{link.icon} {link.text}</a></li>)}
      </ul>

      <ul className='social-icons'>
        {social.map(link => <li><a href={link.url}>{link.icon}</a></li>)}
      </ul>
    </aside>
  );
};

export default Sidebar;
