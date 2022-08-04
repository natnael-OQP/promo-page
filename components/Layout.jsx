import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { useRouter } from 'next/router';

function Layout({ children }) {
    const route = useRouter();
    const { pathname } = route;

    return (
        <div
            className={`mx-auto max-w-8xl overflow-hidden ${
                pathname == '/black' && 'bg-black'
            } `}
        >
            <Header />
            <main>{children}</main>
            {/*
                <Footer />
            */}
        </div>
    );
}

export default Layout;
