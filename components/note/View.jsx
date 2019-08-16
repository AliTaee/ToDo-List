import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const shortid = require('shortid');

const View = props => {
  const { tasks } = props;
  return (
    <section>
      <h2>Note List</h2>
      <ul>
        {tasks.length === 0 ? (
          <p>No notes yet.</p>
        ) : (
          tasks.map(item => (
            <li key={shortid.generate()}>
              {item.task}
              <br />
              {item.content}
            </li>
          ))
        )}
      </ul>
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
