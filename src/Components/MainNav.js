import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = () => {

  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to='/search/games'>Games</NavLink></li>
        <li><NavLink to='/search/colors'>Colors</NavLink></li>
        <li><NavLink to='/search/chakra'>Chakra</NavLink></li>
      </ul>
    </nav>
  );
};

export default MainNav;
