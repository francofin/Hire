import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;



export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName:String!, $email:String!, $password: String!, $profileText: String!, $skills: [ID], $image:String) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, profileText: $profileText, skills: $skills, image: $image) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const UPLOAD_MUTATION = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      id
      filename
      mimetype
      path
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($product: ID!) {
    addOrder(product: $product) {
      purchaseDate
      product {
        _id
      name
      description
      price
      }
    }
  }
`;