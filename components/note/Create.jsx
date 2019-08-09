import React from 'react';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';

function CreateNotes() {
    let taskName;
    let taskContent;

    const handleSubmit = (event) => {
        console.log(taskName);
        console.log(taskContent);
        event.target.reset();
        event.preventDefault();
    };

    const handleTaskName = (e) => {
        taskName = e.target.value;
    };

    const handleTaskContent = (e) => {
        taskContent = e.target.value;
    };

    return (
        <section>
            <h2>Add Note</h2>
            <form id="create-note" noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    required
                    fullWidth
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
}

export default CreateNotes;
