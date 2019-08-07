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
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    key="viewport"
                />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <script type="text/javascript" src="/static/pwa_script.js" />
            </Head>
            <div>
                <HelloWorld />
            </div>
        </useCounterContext.Provider>
    );
}

export default Index;
