import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Post from 'components/post';

export default function Posts({ className }) {
  return (
    <StaticQuery
      query={graphql`
        query SITE_POSTS_QUERY {
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
      `}
      render={data => (
        <div className={`posts-container container ${className}`}>
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
      )}
    />
  );
}
