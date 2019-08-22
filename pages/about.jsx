import React from 'react';

// Icons
import LoveIcon from '@material-ui/icons/Favorite';

// Components
import Layout from '../src/components/layout/MainLayout';

function About() {
  return (
    <Layout>
      <h2>About Todo List</h2>
      <p>This Todo list app create with:</p>
      <ul className="create-tech">
        <li>React</li>
        <li>Redux</li>
        <li>Next.js</li>
        <li>Material-UI</li>
        <li>SASS</li>
        <li>ESLINT</li>
        <li>Prettier</li>
        <li>
          <LoveIcon />
        </li>
      </ul>
      <p className="info-author">Design and Develop by: AliTaee</p>
    </Layout>
  );
}

export default About;
