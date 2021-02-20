const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Order, Employer, Jobs, Profile} = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')(Process.env.STRIPE);