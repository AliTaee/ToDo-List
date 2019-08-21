import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Materail UI
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTask } from '../../redux/Actions/actionTasks';

const CreateNotes = props => {
  let taskName;
  let taskContent;
  let taskNameRequired = false;
  let titleNote = useRef(null);

  const handleSubmit = event => {
    event.preventDefault();

    if (taskName === '') {
      taskNameRequired = true;
      return;
    }

    const newTask = {
      task: taskName,
      content: taskContent,
    };

    props.addTask(newTask);

    taskName = '';
    taskContent = '';
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
    <section>
      <h2>Add Note</h2>
      <form id="create-note" autoComplete="off" onSubmit={handleSubmit}>
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
          error={taskNameRequired}
        />
        <TextareaAutosize
          rows={6}
          onChange={handleTaskContent}
          value={taskContent}
          id="content-task"
          aria-label="note content"
          placeholder="Note Content"
        />
        <Button type="submit" variant="contained" color="primary">
          Create Note
        </Button>
      </form>
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
