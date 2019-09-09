import React from 'react';
import Head from 'next/head';

const HeadDoc = () => (
  <Head>
    <title>Todo list</title>

    <meta name="theme-color" content="#282828"></meta>
    <meta name="msapplication-navbutton-color" content="#282828"></meta>
    <meta name="apple-mobile-web-app-status-bar-style" content="#282828"></meta>

    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      key="viewport"
    />
    <link rel="icon" href={`${process.env.BACKEND_URL}/static/favicon.png`} />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
    <script type="text/javascript" src={`${process.env.BACKEND_URLS}/static/pwa_script.js`} />
  </Head>
);

export default HeadDoc;
