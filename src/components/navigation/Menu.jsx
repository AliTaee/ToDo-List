import React from 'react';
import Link from 'next/link';

// Icons
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

const Menu = () => (
  <header>
    <h2>Menu</h2>
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <Link href="/" as={process.env.BACKEND_URL + '/'}>
            <div className="menu__item-container">
              <HomeIcon />
              <span className="menu__item-name">Home</span>
            </div>
          </Link>
        </li>
        <li className="menu__item">
          <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
            <div className="menu__item-container">
              <InfoIcon />
              <span className="menu__item-name">About Todo List</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Menu;
