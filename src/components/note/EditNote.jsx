import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

// Materail UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { editTask } from '../../redux/actions/actionTasks';
import { activeMain } from '../../redux/actions/actionMain';

const EditNote = props => {
  const { activeData } = props;
  let titleNote = useRef(null);

  const [taskName, setTaskTitle] = useState('');
  const [taskContent, setTaskContent] = useState('');
  const [taskNameRequired, setError] = useState([false]);
  const [successCreate, setMassage] = useState([false]);

  useEffect(() => {
    setTaskTitle(activeData.title);
    setTaskContent(activeData.content);
  }, [activeData]);

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

  const saveNote = event => {
    event.preventDefault();

    if (taskName === '' || taskName === undefined) {
      titleIsEmpty();
      return;
    }

    const newEditTask = Object.assign({}, activeData, {
      title: taskName,
      content: taskContent,
      date: new Date()
        .toISOString()
        .replace('-', '/')
        .split('T')[0]
        .replace('-', '/'),
    });
    props.editTask(newEditTask);
    props.activeMain('create');
    clearForm();
  };

  const clearForm = () => {
    setTaskTitle('');
    setTaskContent('');
    setError(false);
    setMassage(true);
    titleNote.current.focus();
  };

  return (
    <section id="create-note">
      <h2>Edit Note</h2>
      <form noValidate autoComplete="off">
        <TextField
          required
          label="Note Title"
          classes={{ root: 'note-titile' }}
          variant="filled"
          type="text"
          id="title-task"
          fullWidth
          autoFocus
          inputRef={titleNote}
          onChange={handleTaskName}
          error={taskNameRequired === true}
          value={taskName}
          name="text"
        />
        <TextField
          multiline
          label="Note Content"
          classes={{ root: 'note-desc' }}
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
        <span onClick={saveNote}>
          {taskName === '' || taskName === undefined ? (
            <Button variant="contained" color="primary">
              Save Note
            </Button>
          ) : (
            <Link href="/">
              <Button variant="contained" color="primary">
                Save Note
              </Button>
            </Link>
          )}
        </span>
        <Button onClick={clearForm} className="reset-form" variant="contained" color="secondary">
          Clear
        </Button>
      </form>
      {successCreate === true && <p className="mobile success message">Note saved successfully.</p>}
    </section>
  );
};

EditNote.propTypes = {
  activeData: PropTypes.object.isRequired,
  editTask: PropTypes.func.isRequired,
  activeMain: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    editTask: bindActionCreators(editTask, dispatch),
    activeMain: bindActionCreators(activeMain, dispatch),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(EditNote);
