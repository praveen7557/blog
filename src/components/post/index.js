import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import './post.scss';

export default function Post({ frontmatter, fields }) {
  const { cover, title, description } = frontmatter;
  return (
    <div className="post-item">
      <Link to={fields.slug}>
        {!!cover ? <Img fluid={cover.childImageSharp.sizes} /> : null}
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
}
