import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteTask, deleteTasks } from '../../redux/Actions/actionCreator';

// Materail UI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const View = props => {
  const { tasks } = props;

  const handleToggle = value => {
    console.log(value);
  };

  const handleDeleteNote = id => {
    props.deleteTask(id);
  };

  const handleDeleteAllNote = () => {
    props.deleteTasks();
  };

  return (
    <section>
      <h2>Note List</h2>

      {tasks.length === 0 ? (
        <p>No notes yet.</p>
      ) : (
        <div className="list-tasks">
          <List className="note-list">
            {tasks.map(item => (
              <ListItem key={item.id} role={undefined} dense button onClick={handleToggle(item.id)}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={false}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': item.id }}
                  />
                </ListItemIcon>
                <ListItemText
                  id={item.id}
                  primary={`${item.task} ${item.content}`}
                  secondary={`${item.date}`}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    onClick={() => handleDeleteNote(item.id)}
                    edge="end"
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="edit">
                    <EditIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
          <Button onClick={handleDeleteAllNote} variant="contained" color="secondary">
            <DeleteIcon /> Delete Notes
          </Button>
        </div>
      )}
    </section>
  );
};

View.propTypes = {
  tasks: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
  deleteTasks: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    tasks: state.tasksReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTask: bindActionCreators(deleteTask, dispatch),
    deleteTasks: bindActionCreators(deleteTasks, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
