import {gql} from '@apollo/client';

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
  mutation addUser($firstName: String!, $lastName:String!, $email:String!, $password: String!, $profileText: String!, $skills: [ID], $upload:ID) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, profileText: $profileText, skills: $skills, upload: $upload) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_JOB = gql`
  mutation addJob($email: String!, $description:String!, $role:String!, $skills: [ID], $upload:ID) {
    addJob(email: $email, description: $description, role: $role, skills: $skills, upload:$upload) {
      email
      _id
    }
  }
`;

export const APPLY = gql`
mutation showJobInterest($id:ID!){
  showJobInterest(_id:$id){
    role
  }
}
`;

export const DELETE_JOB = gql`
mutation deleteJob($id:ID!){
  deleteJob(_id:$id){
    _id
    role
  }
}
`;


export const UPLOAD_MUTATION = gql`
  mutation uploadFile($file: FileUpload!) {
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