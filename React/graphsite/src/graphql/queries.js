import { gql } from '@apollo/client';

const GET_BLOGS_INFO = gql`
  query {
    posts {
      author {
        name
        avatar {
          url
        }
      }
      title
      slug
      id
      coverPhoto {
        url
      }
    }
  }
`;

const GET_AUTHORS_INFO = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      description {
        html
      }
      posts {
        coverPhoto {
          url
        }
        slug
        title
        id
      }
      avatar {
        url
      }
      field
      name
    }
  }
`;

const GET_BLOG_INFO = gql`
  query getPostOnfo($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        avatar {
          url
        }
        field
        name
      }
      content {
        html
      }
      title
      coverPhoto {
        url
      }
    }
  }
`;

const GET_BLOG_COMMENTS = gql`
  query getComments($slug: String!) {
  comments(where: {post: {slug: $slug}}) {
    id
    name
    text
  }
}
`;

export { GET_BLOGS_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO, GET_BLOG_INFO, GET_BLOG_COMMENTS };
