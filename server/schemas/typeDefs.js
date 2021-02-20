const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type Category {
        _id: ID
        name: String
    }

    type Jobs {
        _id: ID
        companyName: String
        description: String
        createdAt: String
        role: String
        image: String
        category: Category
        interestCount: Int
        interests: [Interestd]
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
        jobs: [Jobs]
        jobCount: Int
        profile: Profile
        orders: Order
    }

    type Profile {
        _id: ID
        profiletext: String
        createdAt: String
        email: String
        image: String
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

    type Employer {
        id:ID
        firstName: String
        lastName: String
        companyName: String
        email: String
        profile: Profile
        orders: Order
        candidates: [User]
        jobs: [Jobs]
        candidateCount: Int
        jobCount: Int
    }

    type AuthUser {
        token: ID!
        user: User
    }

    type AuthEmployer {
        token: ID!
        employer: Employer
    }

    type Query {
        me: User
        company: Employer
        users: [User]
        employers: [Employer]
        user(email: String!): User
        employer(companyName: String!): Employer
        job(category: ID, companyName: String): [Jobs]
        jobs: [Jobs]
        order(_id: ID!): Order
        checkout(product: ID!): Checkout
        product(_id: ID!): Product
        categories: [Category]
        userProfile(email:String!): Profile
    }

    type Mutation {
        addUser(firstName: String!, lastName:String!, email:String!, password: String! ): AuthUser
        addEmployer(firstName: String!, lastName:String!, companyName: String!, email:String!, password: String!): AuthEmployer
        addOrder(product: ID!): Order
        addProfile(profiletext: String!, email:String!, image:String!): Profile
        addJob(companyName: String!, role:String!, description: String!, image:String!, category:String!): Jobs
        updateUser(firstName: String, lastName: String, email: String, password: String): User
        loginUser(email: String!, password: String!): AuthUser
        loginEmployer(email: String!, password: String!): AuthEmployer
    }



`;



module.exports = typeDefs;
