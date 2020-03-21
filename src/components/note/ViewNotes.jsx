import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { activeMain } from '../../redux/actions/actionMain';

// Components
import NoteList from './note-list-children/NoteList';

// Materail UI
import Button from '@material-ui/core/Button';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

const View = props => {
  const router = useRouter();
  const { tasks, active } = props;

  const activeAddNote = () => {
    props.activeMainDispatch('create');
  };

  return (
    <section className="notes">
      <div className="notes_header">
        <h3 className="h3">Note List</h3>
        {(active.name !== 'create' || router.pathname !== '/') && (
          <Link href="/" as={process.env.BACKEND_URL + '/'}>
            <Button
              onClick={activeAddNote}
              className="add-note"
              variant="contained"
              color="primary"
            >
              <NoteAddIcon />
            </Button>
          </Link>
        )}
      </div>
      <NoteList tasks={tasks} />
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
