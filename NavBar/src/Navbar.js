import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(true);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleShow = () => {
    setShowLinks(oldShowLinks => !oldShowLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect();
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight.height}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt="logo" />
          <button className='nav-toggle' onClick={toggleShow}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map(link => <li key={link.id}><a href={link.url}>{link.text}</a></li>)}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map(social => <li key={social.id}><a href={social.url}>{social.icon}</a></li>)}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
