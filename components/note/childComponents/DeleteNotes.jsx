import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteTasks } from '../../../redux/Actions/actionCreator';

// Materail UI - Button and Icon
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

// Materail UI - Dialog
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const DeleteNotes = props => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteAllNote = () => {
    props.deleteTasks();
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-delete-title"
        aria-describedby="alert-dialog-title-description"
      >
        <DialogTitle id="alert-dialog-delete-title">{'Are you sure?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-title-description">
            This action will delete all selected notes.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteAllNote} variant="contained" color="secondary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Button onClick={handleClickOpen} variant="contained" color="secondary">
        <DeleteIcon /> Delete Notes
      </Button>
    </div>
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
