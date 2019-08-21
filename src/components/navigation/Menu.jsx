import React from 'react';
import Link from 'next/link';

// Icons
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

const Menu = () => (
  <header>
    <h2>Menu</h2>
    <nav>
      <ul>
        <li className="nav-item">
          <Link href="/">
            <div>
              <HomeIcon />
              <span>Home</span>
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about">
            <div>
              <InfoIcon />
              <span>About Todo List</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Menu;
