import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

// Materail UI
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
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
          value={taskName}
          id="title-task"
          label="Note Title"
          type="text"
          name="text"
          margin="normal"
          variant="outlined"
        />
        <TextareaAutosize
          rows={6}
          onChange={handleTaskContent}
          id="content-task"
          aria-label="note content"
          placeholder="Note Content"
        />
        <Button type="submit" variant="contained" color="primary">
          Create Note
        </Button>
      </form>
      {taskNameRequired === true && (
        <p className="error message">Please enter a title for the note.</p>
      )}
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
