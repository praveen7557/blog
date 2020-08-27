import React from 'react';
import Posts from 'components/posts';
import Layout from 'components/layout';

export default function PostsPage() {
  return (
    <Layout>
      <Posts className="posts-page" />
    </Layout>
  );
}
