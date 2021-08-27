import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      _id
      username
      email
      password
    }
  }
`;


export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      User
    }
  }
`;
export const SAVE_BOOK = gql`
  mutation savebook($authors: Array!, $description: String!, $bookId: String!,  $image: String!, $link: String!) {
    saveBook(authors: $authors, description: $description, bookId: $bookId) {
      _id
      User
    }
  }
`

;