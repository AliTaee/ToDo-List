import React from 'react';

// Icons
import LoveIcon from '@material-ui/icons/Favorite';

// Components
import Layout from '../src/components/layout/MainLayout';

function About() {
  return (
    <Layout>
      <div className="about">
        <h2 className="h2">About Todo List</h2>
        <p>This Todo list app create with:</p>
        <ul className="about__tech">
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
        <p className="about__author">Design and Develop by: AliTaee</p>
      </div>
    </Layout>
  );
}

export default About;
