import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { activeMain } from '../../redux/actions/actionMain';

// Components
import NoteList from './viewChildComponents/NoteList';

// Materail UI
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

const View = props => {
  const { tasks, active } = props;

  const activeAddNote = () => {
    props.activeMainDispatch('create');
  };

  return (
    <section className="note-list-container">
      <h3>Note List</h3>
      {active.name === 'singleNote' && (
        <Button onClick={activeAddNote} className="add-note" variant="contained" color="primary">
          Add Note <EditIcon />
        </Button>
      )}
      {tasks.length === 0 ? <p>No notes yet.</p> : <NoteList tasks={tasks} />}
    </section>
  );
};

View.propTypes = {
  tasks: PropTypes.array.isRequired,
  activeMainDispatch: PropTypes.func.isRequired,
  active: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    activeMainDispatch: bindActionCreators(activeMain, dispatch),
  };
};

const mapStateToProps = state => {
  return {
    tasks: state.tasksReducer,
    active: state.mainReducer,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);