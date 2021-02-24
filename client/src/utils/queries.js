import gql from "graphql-tag";

export const QUERY_SKILLS = gql`
  {
    skills {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  query getUser($email: String) {
    user (email: $email) {
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

export const QUERY_ALL_USERS = gql`
  {
    users {
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
  query getJob($skills: ID) {
    jobs(skills: $skills) {
      _id
      email
      description
      image
      createdAt
      skills {
        _id
      }
    }
  }
`;

export const QUERY_ALL_JOBS = gql`
  {
    jobs {
      _id
      email
      description
      image
      createdAt
      skills {
        name
      }
    }
  }
`;
