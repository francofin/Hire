import gql from 'graphql-tag';

export const QUERY_SKILLS = gql`
{
  skills {
    _id
    name
  }
}
`;

export const QUERY_JOBS = gql`
  query getJobs($skills: ID) {
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