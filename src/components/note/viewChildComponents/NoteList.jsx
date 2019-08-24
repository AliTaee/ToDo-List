import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteTask, doneTask } from '../../../redux/actions/actionTasks';
import { activeMain } from '../../../redux/actions/actionMain';

// Materail UI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

// Component
import DeleteNotes from './DeleteNotes';

const NoteList = props => {
  const { tasks } = props;

  const handleActiveMain = item => {
    props.activeMain('singleNote', item.task, item.content, item.date);
  };

  const handleToggle = item => {
    if (item.done === false) {
      props.doneTask(true, item.id);
    } else {
      props.doneTask(false, item.id);
    }
  };

  const handleDeleteNote = id => {
    props.deleteTask(id);
  };

  return (
    <div className="list-tasks">
      <List className="note-list">
        {tasks.map(item => (
          <ListItem key={item.id} dense button>
            <ListItemIcon>
              <Checkbox
                edge="start"
                onClick={() => handleToggle(item)}
                checked={item.done === true}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': item.id }}
              />
            </ListItemIcon>
            <ListItemText
              onClick={() => handleActiveMain(item)}
              className={item.done === true ? 'done' : ''}
              id={item.id}
              primary={item.task}
              secondary={`${item.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton onClick={() => handleDeleteNote(item.id)} edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
              <IconButton edge="end" aria-label="edit">
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      {tasks.some(item => item.done === true) === true && <DeleteNotes selectedNotes={tasks} />}
    </div>
  );
};

NoteList.propTypes = {
  tasks: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
  activeMain: PropTypes.func.isRequired,
  doneTask: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTask: bindActionCreators(deleteTask, dispatch),
    activeMain: bindActionCreators(activeMain, dispatch),
    doneTask: bindActionCreators(doneTask, dispatch),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(NoteList);