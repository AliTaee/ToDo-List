import Link from 'next/link';

const Index = () => (
    <div>
        <Link href="/about">
            <a title="About Page">About</a>
        </Link>
        <p>Hello World</p>
        <style jsx>{`
            a {
                color: #0000ff;
            }
        `}</style>

        <style jsx global>{`
            body {
                background: #212121;
                color: #fefefe;
            }
        `}</style>
    </div>
);

export default Index;