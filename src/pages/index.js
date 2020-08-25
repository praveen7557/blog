import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PersonImage from '../components/image';
import Img from 'gatsby-image';
import '../styles/home.scss';

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
        {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }) => (
          <Link to={fields.slug}>
            {!!frontmatter.cover ? (
              <Img sizes={frontmatter.cover.childImageSharp.sizes} />
            ) : null}
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <p>{excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
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
          cover {
            publicURL
            childImageSharp {
              sizes(maxWidth: 2000, traceSVG: { color: "#639" }) {
                ...GatsbyImageSharpSizes_tracedSVG
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
