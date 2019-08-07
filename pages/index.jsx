import React from 'react';
import Head from 'next/head';
import { useCounterContext } from '../context/store';
import HelloWorld from '../components/HelloWorld';
import '../styles/style.scss';

function Index() {
    return (
        <useCounterContext.Provider>
            <Head>
                <title>Todo list</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                    key="viewport"
                />
                <script type="text/javascript" src="/static/pwa_script.js" />
            </Head>
            <div>
                <HelloWorld />
            </div>
        </useCounterContext.Provider>
    );
}

export default Index;
