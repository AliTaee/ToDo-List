import React from 'react';
import { connect } from 'react-redux';

class View extends React.Component {
  render() {
    return (
      <section>
        <h2>Note List</h2>
        <ul>
          {this.props.tasks.map(function(item, index) {
            return (
              <li key={index}>
                {item.task}
                <br />
                {item.content}
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasksReducer
  };
};

export default connect(
  mapStateToProps,
  null
)(View);
