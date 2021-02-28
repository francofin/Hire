const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type Skills {
        _id: ID
        name: String!
    }

    type Image {
        id: ID!
        filename: String!
        mimetype: String!
        path: String!
    }

    type Jobs {
        _id: ID
        email: String
        description: String
        createdAt: String
        image: String
        positionFilled: Boolean
        skills: Skills
        role: String
        userInterestCount: Int
        candidateCount: Int
        matchCount: Int
        applicants: [User]
        candidates: [User]
        matchedCandidates: [User]
        
    }

    type Order {
        _id: ID
        purchaseDate: String
        product: Product
    }

    type Product {
        _id: ID
        name: String
        description: String
        price: Float
        quantity: Int
    }

    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        password: String
        profileText: String
        image: String
        upload: Image
        applied: [Jobs]
        jobOffers: [Jobs]
        matchedJobs:[Jobs]
        skills: Skills
        jobs: [Jobs]
        jobCount: Int
        offerCount: Int
        matchedJobCount: Int
        applicantCount: Int
        skillCount: Int
        orders: Order
    }

    type Checkout {
        session: ID
      }


    type Auth {
        token: ID!
        user: User
    }


    type Query {
        me: User
        users: [User]
        user(_id: ID!): User
        job(_id: ID): [Jobs]
        jobs(skills: ID, role:String): [Jobs]
        order(_id: ID!): Order
        checkout(product: ID!): Checkout
        images: [Image]
        product(_id: ID): Product
        skills: [Skills]
        skill(_id:ID): Skills
        uploads(_id: ID): [Image]
    }

    type Mutation {
        addUser(firstName: String!, lastName:String!, email:String!, password: String!, profileText: String, skills: [ID], upload:ID): Auth
        updateUser(firstName: String, lastName: String, email: String, password: String, image:String): User
        login(email: String!, password: String!): Auth
        addJob(email: String!, description: String!, image:String, skills:[ID], role:String!): Jobs
        updateJob(description: String, positionFilled:Boolean!): Jobs
        showJobInterest(jobId:ID!): Jobs
        showUserInterest(userId:ID!): User
        addOrder(product: ID!): Order
        uploadFile(file: Upload!): Image!
    }
`;



module.exports = typeDefs;
