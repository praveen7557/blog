import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import '../styles/blog-post.scss';

export default function BlogPost({ data, pageContext }) {
  const {
    frontmatter: { date, title, description, cover },
    body,
  } = data.mdx;
  const { previous, next } = pageContext;

  return (
    <Layout>
      <SEO title={title} />
      <div className="head-content">
        <div className="about">
          <div className="about-content">
            <div className="date">{date}</div>
            <h1 className="title">{title}</h1>
            <p className="description">{description}</p>
          </div>
        </div>
        <div className="cover">
          {cover ? <Img fluid={cover.childImageSharp.sizes} /> : null}
        </div>
      </div>
      <div className="blog-content">
        <MDXRenderer>{body}</MDXRenderer>
        <div className="nav-items">
          <div>
            {previous === false ? null : (
              <>
                {previous && (
                  <Link to={previous.fields.slug} className="nav-link">
                    <p>
                      <span className="nav-icon">←</span>{' '}
                      {previous.frontmatter.title}
                    </p>
                  </Link>
                )}
              </>
            )}
          </div>
          <div>
            {next === false ? null : (
              <>
                {next && (
                  <Link to={next.fields.slug} className="nav-link">
                    <p>
                      {next.frontmatter.title}{' '}
                      <span className="nav-icon">→</span>
                    </p>
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        description
        cover {
          publicURL
          childImageSharp {
            sizes(maxWidth: 700, maxHeight: 500) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
