import React from 'react';
import Head from 'next/head';
import { useCounterContext } from '../context/store';

// Pages
import CreateNotes from './CreateNotes';

// Components
import Menu from '../components/navigation/Menu';

// Styles
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
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
            <Container>
                <main>
                    <Grid container spacing={0}>
                        <Grid item xs={2}>
                            <Menu />
                        </Grid>
                        <Grid className="main" item xs={10}>
                            <CreateNotes />
                        </Grid>
                    </Grid>
                </main>
            </Container>
        </useCounterContext.Provider>
    );
}

export default Index;
