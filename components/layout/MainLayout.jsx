import React from 'react';
import Head from 'next/head';

// Styles
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

// Components
import Menu from '../navigation/Menu';

// Styles
import '../../styles/style.scss';

const MainLayout = props => (
  <main>
    <Head>
      <title>Todo list</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        key="viewport"
      />
      <link rel="icon" href="/static/favicon.png" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <script type="text/javascript" src="/static/pwa_script.js" />
    </Head>
    <Container>
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <Menu />
        </Grid>
        <Grid className="main" item xs={10}>
          {props.children}
        </Grid>
      </Grid>
    </Container>
  </main>
);

export default MainLayout;
