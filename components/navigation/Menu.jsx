import React from 'react';
import Link from 'next/link';

const Menu = () => (
    <div>
        <h2>Menu</h2>
        <Link href="/">Home</Link>
        <Link href="/Create">Create</Link>
    </div>
);

export default Menu;
