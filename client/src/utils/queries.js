import gql from 'graphql-tag';

export const QUERY_SKILLS = gql`
{
  skills {
    _id
    name
  }
}
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      email
      firstName
      lastName
      profileText
      upload{
        id
        path
      }
      skills {
        _id
        name
      }
      jobs {
        role
        _id
      }
    }
  }
`;

export const QUERY_USER = gql`
query user($id:ID!) {
  user(_id: $id) {
    _id
    email
    firstName
    lastName
    profileText
    upload{
      id
      path
    }
    image 
    jobs {
      role
      _id
    }
    skills {
      _id
      name
    }
    jobOffers {
      description
      positionFilled
      image
      role
      createdAt
    }
    applied {
      description
      positionFilled
      image
      role
      createdAt
    }
    matchedJobs {
      description
      positionFilled
      image
      createdAt
    }
  }
}
`;

export const QUERY_ALL_USERS = gql`
  query getusers($id: ID) {
    users(_id: $ID) {
      _id
    email
    firstName
    lastName
    profileText
    image 
    skills {
      _id
      name
    }
    jobOffers {
      description
      positionFilled
      image
      skills {
        _id
        name
      }
      createdAt
    }
    applied {
      description
      positionFilled
      image
      skills {
        _id
        name
      }
      createdAt
    }
    matchedJobs {
      description
      positionFilled
      image
      skills {
        _id
        name
      }
      createdAt
    }
  }
}
    
`;

export const QUERY_JOBS_BY_SKILL = gql`
  query getJobs($skills: ID) {
    jobs(skills: $skills) {
      _id
      email
      role
      description
      image
      upload {
        id
        path
        filename
      }
      createdAt
      skills {
        _id
        name
      }
      candidates {
        firstName
        _id
      }
      applicants {
        firstName
        lastName
        image
        _id
      }
    }
  }
`;

export const QUERY_IMAGE = gql`
  {
    images {
      id
      filename
      path
    }
  } 
`;

export const QUERY_ALL_JOBS = gql`
  {
    jobs {
      _id
      email
      description
      role
      image
      createdAt
      skills {
        name
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: ID!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_PRODUCT = gql`
query {
  product {
    _id
    name
    description
    price
    quantity
  }  
}
`;

