import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteTasks } from '../../../redux/Actions/actionCreator';

// Materail UI
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const DeleteNotes = props => {
  const handleDeleteAllNote = () => {
    props.deleteTasks();
  };
  return (
    <Button onClick={handleDeleteAllNote} variant="contained" color="secondary">
      <DeleteIcon /> Delete Notes
    </Button>
  );
};

DeleteNotes.propTypes = {
  deleteTasks: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTasks: bindActionCreators(deleteTasks, dispatch),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(DeleteNotes);
