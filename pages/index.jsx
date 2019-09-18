import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { loadState } from '../src/localStorage';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initial_localStorage } from '../src/redux/actions/actionTasks';

// Styles
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

// Components
import Head from '../src/components/layout/Head';
import Menu from '../src/components/navigation/Menu';
import CreateNote from '../src/components/note/CreateNote';
import ViewNotes from '../src/components/note/ViewNotes';
import ViewNote from '../src/components/note/ViewNote';

// Styles
import '../src/styles/style.scss';

const Index = props => {
  const { active } = props;

  /*
   * Load user notes from localStorage
   */
  useEffect(() => {
    const localStorage = loadState();
    props.initial_localStorage(localStorage);
  });

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
            {active.name === 'create' ? <CreateNote activeData={active} /> : <ViewNote />}
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

Index.propTypes = {
  active: PropTypes.object.isRequired,
  initial_localStorage: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    active: state.mainReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initial_localStorage: bindActionCreators(initial_localStorage, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index);
