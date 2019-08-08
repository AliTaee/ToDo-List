import React from 'react';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';

// Components
import Layout from '../components/layout/MainLayout';

const handleSubmit = (event) => {
    event.preventDefault();
};

function CreateNotes() {
    return (
        <Layout>
            <h2>Add Note</h2>

            <form id="create-note" noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    required
                    fullWidth
                    id="title-task"
                    label="Note Title"
                    type="text"
                    name="text"
                    margin="normal"
                    variant="outlined"
                />
                <TextareaAutosize
                    rows={6}
                    id="content-task"
                    aria-label="note content"
                    placeholder="Note Content"
                />
                <Button type="submit" variant="contained" color="primary">
                    Create Note
                </Button>
            </form>
        </Layout>
    );
}

export default CreateNotes;
