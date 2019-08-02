import React from 'react';
import Link from 'next/link';

const Index = () => (
    <div>
        <Link href="/about">
            <p className="link" title="About Page">About</p>
        </Link>
        <p>Hello World</p>
        <style jsx>
            {`
            .link {
                color: #0000ff;
                text-decoration: underline;
                cursor: pointer;
                }
        `}
        </style>

        <style jsx global>
            {`
            body {
                background: #212121;
                color: #fefefe;
            }
        `}
        </style>
    </div>
);

export default Index;
