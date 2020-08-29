import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PersonImage from '../components/image';
import '../styles/home.scss';
import ExperienceItem from '../components/experience-item';
import { items } from '../samples/experience';
import Posts from 'components/posts';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home-header">
      <div className="container">
        <h3 className="intro">
          Hi!! I'm Praveen Bolla, <br /> a Front-end Developer.
        </h3>
        <div className="picture">
          <PersonImage />
        </div>
      </div>
    </div>
    <Posts />
    <div className="about-container container">
      <h3>
        About Me{' '}
        <span role="img" aria-label="Thinking Emoji">
          🤔
        </span>
      </h3>
      <p>
        I'm a <span>Front-end Developer</span> working at West Agile Labs,
        Hyderabad, India. I studied Electronics from IIT Dhanbad. I have a total
        of 5 years experience. I am a Web Technologies enthusiast. I’m
        interested in the whole visual part of the web, its usability and
        performance. I'm quietly confident, naturally curious, and perpetually
        working on improving my chops one problem at a time.
      </p>
    </div>
    <div className="experience-container container">
      <h3>
        Work Experience{' '}
        <span role="img" aria-label="Writing Guy Coding">
          👨🏽‍💻
        </span>
      </h3>
      <div className="experience-list">
        {items.map(e => (
          <ExperienceItem key={e.key} item={e} />
        ))}
      </div>
    </div>
  </Layout>
);

export default IndexPage;
