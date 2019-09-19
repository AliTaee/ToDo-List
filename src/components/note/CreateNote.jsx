import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Materail UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTask } from '../../redux/actions/actionTasks';

const CreateNotes = props => {
  let titleNote = useRef(null);
  const [taskName, setTaskTitle] = useState('');
  const [taskContent, setTaskContent] = useState('');
  const [taskNameRequired, setError] = useState([false]);
  const [successCreate, setMassage] = useState([false]);

  useEffect(() => {
    titleNote.current.focus();
  }, []);

  const createNote = event => {
    event.preventDefault();

    if (taskName === '' || taskName === undefined) {
      titleIsEmpty();
      return;
    }

    const newTask = {
      title: taskName,
      content: taskContent,
    };

    props.addTask(newTask);

    clearForm();
  };

  const titleIsEmpty = () => {
    setError(true);
    setMassage(false);
    titleNote.current.focus();
  };

  const handleTaskName = e => {
    setTaskTitle(e.target.value);
  };

  const handleTaskContent = e => {
    setTaskContent(e.target.value);
  };

  const clearForm = () => {
    setTaskTitle('');
    setTaskContent('');
    setError(false);
    setMassage(true);
    titleNote.current.focus();
  };

  return (
    <section className="form">
      <h2 className="h2">Add Note</h2>
      <form noValidate autoComplete="off">
        <TextField
          required
          label="Note Title"
          classes={{ root: 'form__title' }}
          variant="filled"
          type="text"
          id="title-task"
          fullWidth
          inputRef={titleNote}
          onChange={handleTaskName}
          error={taskNameRequired === true}
          value={taskName}
          name="text"
        />
        <TextField
          multiline
          label="Note Content"
          classes={{ root: 'form__desc' }}
          variant="filled"
          type="text"
          id="content-task"
          fullWidth
          rows={6}
          margin="normal"
          onChange={handleTaskContent}
          value={taskContent}
          aria-label="note content"
        />
        <Button onClick={createNote} type="submit" variant="contained" color="primary">
          Create Note
        </Button>
      </form>
      {successCreate === true && (
        <p className="form__mobile form__message form__message--success">
          Note saved successfully.
        </p>
      )}
    </section>
  );
};

CreateNotes.propTypes = {
  addTask: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    addTask: bindActionCreators(addTask, dispatch),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(CreateNotes);
