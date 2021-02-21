const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type Skills {
        _id: ID
        name: String
    }

    type Jobs {
        _id: ID
        description: String
        createdAt: String
        image: String
        skills: [Skills]
        interestCount: Int
        interests: [Interested]
    }

    type Interested {
        _id: ID
        email: String
        createdAt: String
        interestShown: Boolean
    }

    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        profileText: String
        image: [Image]
        interestedJobs: [Jobs]
        matchedJobs:[Jobs]
        skills: [Skills]
        jobs: [Jobs]
        jobCount: Int
        interestedJobCount: Int
        matchedJobCount: Int
        skillCount: Int
        orders: Order
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
    }

    type Image {
        _id:ID
        name: String!
        mimetype: String!
        encoding: String!
    }

    type AuthUser {
        token: ID!
        user: User
    }

    type Checkout {
        session: ID
      }

    type Query {
        me: User
        users: [User]
        user(email: String!): User
        job(Skills: ID): [Jobs]
        jobs: [Jobs]
        order(_id: ID!): Order
        checkout(product: ID!): Checkout
        product(_id: ID!): Product
        skills: [Skills]
    }

    type Mutation {
        addUser(firstName: String!, lastName:String!, email:String!, password: String!, profiletext: String, skills: [Skills!], image:String): AuthUser
        updateUser(firstName: String, lastName: String, email: String, password: String, image:String): User
        loginUser(email: String!, password: String!): AuthUser
        addJob(email: String!, description: String!, image:String, skills:[String!]): Jobs
        updateJob(description: String, positionFilled:Boolean!): Jobs
        showJobInterest(interestShown:Boolean): Interested
        showUserInterest(interstShown:Boolean): Interested
        addOrder(product: ID!): Order
        singleUpload(file: Upload!): Image!
        uploads: [Image]
    }



`;



module.exports = typeDefs;
