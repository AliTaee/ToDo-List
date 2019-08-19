import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Components
import NoteList from './ViewSubComponents/NoteList';

const View = props => {
  const { tasks } = props;

  return (
    <section>
      <h3>Note List</h3>
      {tasks.length === 0 ? <p>No notes yet.</p> : <NoteList tasks={tasks} />}
    </section>
  );
};

View.propTypes = {
  tasks: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return {
    tasks: state.tasksReducer,
  };
};

export default connect(
  mapStateToProps,
  null,
)(View);
