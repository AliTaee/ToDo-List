import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

const ViewNote = props => {
  const { activeMain } = props;
  return (
    <article className="view-note">
      <h3 className="view-note__title">
        {activeMain.title}
        <small className="view-note__date"> ({activeMain.date})</small>
      </h3>
      <p>{activeMain.content}</p>
    </article>
  );
};

ViewNote.propTypes = {
  activeMain: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    activeMain: state.mainReducer,
  };
};

export default connect(
  mapStateToProps,
  null,
)(ViewNote);
