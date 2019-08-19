import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Styles
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

// Components
import Head from '../components/layout/Head';
import Menu from '../components/navigation/Menu';
import CreateNote from '../components/note/Create';
import ViewNotes from '../components/note/ViewNotes';
import ViewNote from '../components/note/ViewNote';

// Styles
import '../styles/style.scss';

const Index = props => {
  const { active } = props;
  return (
    <main>
      <Head />
      <Container>
        <Grid container spacing={0}>
          <Grid item xs={12} md={3}>
            <Menu />
            <ViewNotes />
          </Grid>
          <Grid className="main" item xs={12} md={9}>
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
