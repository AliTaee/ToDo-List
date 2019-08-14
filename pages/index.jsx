import React from 'react';
import { connect } from 'react-redux';

// Styles
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

// Components
import Head from '../components/layout/Head';
import Menu from '../components/navigation/Menu';
import CreateNote from '../components/note/Create';
import View from '../components/note/View';

// Styles
import '../styles/style.scss';

class Index extends React.Component {
  render() {
    return (
      <main>
        <Head />
        <Container>
          <Grid container spacing={0}>
            <Grid item xs={12} md={3}>
              <Menu />
              <View />
            </Grid>
            <Grid className="main" item xs={12} md={9}>
              <CreateNote />
            </Grid>
          </Grid>
        </Container>
      </main>
    );
  }
}

export default connect(
  null,
  null
)(Index);
