import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

// Materail UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTask } from '../../redux/actions/actionTasks';

const CreateNotes = props => {
  let taskName;
  let taskContent;
  let titleNote = useRef(null);
  const [taskNameRequired, setError] = useState([false]);
  const [successCreate, setMassage] = useState([false]);

  const handleSubmit = event => {
    event.preventDefault();

    if (taskName === '' || taskName === undefined) {
      setError(true);
      setMassage(false);
      titleNote.current.focus();
      return;
    }

    const newTask = {
      task: taskName,
      content: taskContent,
    };

    props.addTask(newTask);

    taskName = '';
    taskContent = '';
    setError(false);
    setMassage(true);
    titleNote.current.focus();
    event.target.reset();
  };

  const handleTaskName = e => {
    taskName = e.target.value;
  };

  const handleTaskContent = e => {
    taskContent = e.target.value;
  };

  return (
    <section id="create-note">
      <h2>Add Note</h2>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          required
          fullWidth
          autoFocus
          inputRef={titleNote}
          onChange={handleTaskName}
          error={taskNameRequired === true}
          value={taskName}
          id="title-task"
          label="Note Title"
          type="text"
          name="text"
          variant="filled"
          classes={{ root: 'note-titile' }}
        />
        <TextField
          label="Note Content"
          multiline
          fullWidth
          margin="normal"
          rows={6}
          onChange={handleTaskContent}
          id="content-task"
          aria-label="note content"
          variant="filled"
          classes={{ root: 'note-desc' }}
        />
        <Button type="submit" variant="contained" color="primary">
          Create Note
        </Button>
      </form>
      {successCreate === true && <p className="mobile success message">Note saved successfully.</p>}
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
