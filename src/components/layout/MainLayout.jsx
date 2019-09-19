import React from 'react';
import PropTypes from 'prop-types';

// Styles
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

// Components
import Menu from '../navigation/Menu';
import Head from './Head';

// Styles
import '../../styles/style.scss';

const MainLayout = props => {
  const { children } = props;
  return (
    <main>
      <Head />
      <Container>
        <Grid container spacing={0}>
          <Grid className="sidebar" item xs={12} sm={12} md={3}>
            <Menu />
          </Grid>
          <Grid className="main" item xs={12} sm={12} md={9}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

MainLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default MainLayout;
