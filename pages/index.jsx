import React from 'react';

// Styles
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

// Components
import Menu from '../components/navigation/Menu';
import CreateNote from '../components/note/Create';
import Head from '../components/layout/Head';

// Styles
import '../styles/style.scss';


function Index() {
    return (
        <main>
            <Head />
            <Container>
                <Grid container spacing={0}>
                    <Grid item xs={3}>
                        <Menu />
                    </Grid>
                    <Grid className="main" item xs={9}>
                        <CreateNote />
                    </Grid>
                </Grid>
            </Container>
        </main>
    );
}

export default Index;
