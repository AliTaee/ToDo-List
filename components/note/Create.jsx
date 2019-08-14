import React from 'react';
import { connect } from 'react-redux';

// Materail UI
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';

class CreateNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
      taskContent: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    console.log(this.state.taskName);
    console.log(this.state.taskContent);

    this.setState({ taskName: '', taskContent: '' });
  };

  handleTaskName = e => {
    this.setState({ taskName: e.target.value });
  };

  handleTaskContent = e => {
    this.setState({ taskContent: e.target.value });
  };

  render() {
    return (
      <section>
        <h2>Add Note</h2>
        <form
          id="create-note"
          noValidate
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <TextField
            required
            fullWidth
            onChange={this.handleTaskName}
            value={this.state.taskName}
            id="title-task"
            label="Note Title"
            type="text"
            name="text"
            margin="normal"
            variant="outlined"
          />
          <TextareaAutosize
            rows={6}
            onChange={this.handleTaskContent}
            value={this.state.taskContent}
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
  }
}

export default connect(
  null,
  null
)(CreateNotes);
