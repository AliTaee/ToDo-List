import React from 'react';

// Styles
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

// Components
import Menu from '../navigation/Menu';
import Head from './Head';

// Styles
import '../../styles/style.scss';

const MainLayout = props => (
  <main>
    <Head />
    <Container>
      <Grid container spacing={0}>
        <Grid item xs={3}>
          <Menu />
        </Grid>
        <Grid className="main" item xs={9}>
          {props.children}
        </Grid>
      </Grid>
    </Container>
  </main>
);

export default MainLayout;
