import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Styles
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

// Components
import Head from '../src/components/layout/Head';
import Menu from '../src/components/navigation/Menu';
import CreateNote from '../src/components/note/Create';
import ViewNotes from '../src/components/note/ViewNotes';
import ViewNote from '../src/components/note/ViewNote';

// Styles
import '../src/styles/style.scss';

const Index = props => {
  const { active } = props;
  return (
    <main>
      <Head />
      <Container>
        <Grid container spacing={0}>
          <Grid className="sidebar" item xs={12} sm={12} md={3}>
            <Menu />
            <ViewNotes />
          </Grid>
          <Grid className="main" item xs={12} sm={12} md={9}>
            {active.name === 'create' ? <CreateNote /> : <ViewNote />}
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

Index.propTypes = {
  active: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    active: state.mainReducer,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Index);
