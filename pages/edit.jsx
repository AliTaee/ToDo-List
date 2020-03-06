import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
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
import ViewNotes from '../src/components/note/ViewNotes';
import EditNote from '../src/components/note/EditNote';

// Styles
import '../src/styles/style.scss';

const Edit = props => {
  const { active } = props;
  const [editNoteData, setEditNoteData] = useState({});
  const router = useRouter();

  /*
   * Load user notes from localStorage
   */
  useEffect(() => {
    const localStorage = loadState();

    // if user directly come to edit route
    if (active.name === 'create') {
      let localData = localStorage.tasksReducer.filter(n => n.id === router.query.id);
      localData = localData[0];
      setEditNoteData(localData);
      props.initial_localStorage(localStorage);
    } else {
      setEditNoteData(active);
    }
  }, [setEditNoteData, active]);

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
            <EditNote activeData={editNoteData} />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

Edit.propTypes = {
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
)(Edit);
