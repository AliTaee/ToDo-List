import React from 'react';
import Link from 'next/link';

const Menu = () => (
    <header>
        <h2>Menu</h2>
        <nav>
            <ul>
                <li className="nav-item">
                    <Link href="/">
                        <a>
                            Home
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/Create">
                        <a>
                            Create Note
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Menu;
