import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PersonImage from '../components/image';
import '../styles/home.scss';
import Post from '../components/Post';
import ExperienceItem from '../components/experience-item';
import { items } from '../samples/experience';
import Footer from '../components/footer';

const IndexPage = ({ data }) => (
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
    <div className="posts-container container">
      <h3>
        Posts{' '}
        <span role="img" aria-label="Writing Emoji">
          ✍🏻
        </span>
      </h3>
      <div className="posts-list">
        {data.allMdx.nodes.map(({ frontmatter, fields }) => (
          <Post
            frontmatter={frontmatter}
            fields={fields}
            key={frontmatter.title}
          />
        ))}
      </div>
    </div>
    <div className="about-container container">
      <h3>
        About Me{' '}
        <span role="img" aria-label="Thinking Emoji">
          🤔
        </span>
      </h3>
      <p>
        I'm a <span>Front-end Developer</span> working at West Agile Labs,
        Hyderabad, India. I studied Electronics from IIT Dhanbad. I am a Web
        Technologies enthusiast. I’m interested in the whole visual part of the
        web, its usability and performance.
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
    <Footer></Footer>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
          description
          cover {
            publicURL
            childImageSharp {
              sizes(maxWidth: 700, maxHeight: 250) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`;
