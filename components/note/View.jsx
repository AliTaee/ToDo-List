import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

const shortid = require('shortid');

const View = props => {
  const { tasks } = props;

  const handleToggle = value => {
    console.log(value);
  };

  return (
    <section>
      <h2>Note List</h2>
      {tasks.length === 0 ? (
        <p>No notes yet.</p>
      ) : (
        <List className="note-list">
          {tasks.map(item => (
            <ListItem
              key={shortid.generate()}
              role={undefined}
              dense
              button
              onClick={handleToggle(shortid.generate())}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={false}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': shortid.generate() }}
                />
              </ListItemIcon>
              <ListItemText
                id={shortid.generate()}
                primary={`${item.task} ${item.content}`}
                secondary={`${item.date}`}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
                <IconButton edge="end" aria-label="edit">
                  <EditIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      )}
    </section>
  );
};

View.propTypes = {
  tasks: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return {
    tasks: state.tasksReducer,
  };
};

export default connect(
  mapStateToProps,
  null,
)(View);
