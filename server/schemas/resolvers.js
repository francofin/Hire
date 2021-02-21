const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Skills, Order, Jobs, Interested } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')(Process.env.STRIPE);

const resolvers = {
  Query: {
    skills: async () => {
      return await Skills.find();
    },
    product: async (parent, { name }) => {
      const params = {};
      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Product.find(params);
    },

    jobs: async (parent, { skills }) => {
      const params = {};

      if (skills) {
        params.skills = skills;
      }

      return await Jobs.find(params)
        .populate('skills')
        .populate('interests')
    },

    job: async (parent, { _id }) => {
      return await Jobs.findOne({ _id })
        .populate('skills')
        .populate('interests')
    },

    users: async () => {
      return User.find()
        .select('-__v -password')
    },
    user: async (parent, { email }) => {
      return User.findOne({ email })
        .select('-__v -password')
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('jobs')
          .populate('skills')
          .populate('interestedJobs')
          .populate('matchedJobs')
          .populate('image')
          .populate('orders')

        console.log('context', context.user);
        console.log('UserData', userData);
        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id)
          .populate('product');

        return user.orders.id(_id);
      }
      throw new AuthenticationError('Not logged in');
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ product: args.product });
      const { product } = await order.populate('product').execPopulate();

      const line_items = [];

      // generate product id
      const productItem = await stripe.products.create({
        name: product.name,
        description: product.description,
        images: [`${url}/images/${product.image}`]
      });

      // generate price id using the product id
      const price = await stripe.prices.create({
        product: productItem.id,
        unit_amount: product.price * 100,
        currency: 'usd',
      });

      // add price id to the line items array
      line_items.push({
        price: price.id,
        quantity: 1
      });


      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      return await User.findOneAndUpdate(
        context.user._id,
        args,
        { new: true }
      );
    },
    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addJob: async (parent, args, context) => {
      if(context.user) {
        const job =  await Jobs.create({...args, email: context.user.email});

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { jobs: job._id } },
          { new: true }
        );
    
        return job;
      }
    },  
    updateJob: async (parent,args, context) => {
      if(context.user) {
        const job =  await Jobs.findOneAndUpdate(
         { _id: jobId}, 
          args,
          {new: true}
        );
    
        return job;
      }
    },
    showJobInterest: async (parent, {jobId, interestShown}, context) => {
      if(context.user) {
        const updatedJob = await Jobs.findOneAndUpdate(
          {_id: jobId},
          {$push: {interests: {interestShown, email:context.user.email}}},
          {new: true}
        );
        return updatedJob;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    showUserInterest: async (parent, {userId, interestShown}, context) => {
      if(context.user) {
        const updatedJob = await Jobs.findOneAndUpdate(
          {_id: jobId},
          {$push: {interests: {interestShown, email:context.user.email}}},
          {new: true}
        );
        return updatedJob;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },

  }
};


module.exports = resolvers;
