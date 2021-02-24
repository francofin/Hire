import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;


export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
      name
      description
      price
      quantity
      category {
        name
      } 
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName:String!, $email:String!, $password: String!, $profileText: String!, $skills: [ID!], $image:String) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, profileText: $profileText, skills: $skills, image: $image) {
      token
      user {
        _id
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
`
  ;