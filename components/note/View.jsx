import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Component
import RenderNoteList from './childComponents/RenderNoteList';

const View = props => {
  const { tasks } = props;

  return (
    <section>
      <h2>Note List</h2>

      {tasks.length === 0 ? (
        <p>No notes yet.</p>
      ) : (
        <div className="list-tasks">
          <RenderNoteList tasks={tasks} />
        </div>
      )}
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
