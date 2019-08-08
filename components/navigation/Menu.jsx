import React from 'react';
import Link from 'next/link';

// Icons
import HomeIcon from '@material-ui/icons/Home';
import CreateIcon from '@material-ui/icons/Create';

const Menu = () => (
    <header>
        <h2>Menu</h2>
        <nav>
            <ul>
                <li className="nav-item">
                    <Link href="/">
                        <a>
                            <HomeIcon />
                            <span>Home</span>
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/Create">
                        <a>
                            <CreateIcon />
                            <span>Create Note</span>
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Menu;
