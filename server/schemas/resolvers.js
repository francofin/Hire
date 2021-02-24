const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Skills, Order, Jobs, Image } = require('../models');
const { signToken } = require('../utils/auth');
const uploadFile = require('../utils/upload');
const {createWriteStream, mkdir, createReadStream} = require('fs');
const fs = require('fs');
const stripe = require('stripe')(process.env.STRIPE);
const shortid = require('shortid');

const storeUpload = async ({stream, filename, mimetype}  ) => {
  const id = shortid.generate();
  const path = `images/${id}-${filename}`;

  return new Promise((resolve, reject) =>{
    stream
    .pipe(createWriteStream(path))
  
  }
  );
};

const processUpload = async (upload) => {
  // console.log("uploaded file", upload.path); 
  console.log("fksmdflsfjd", upload.createReadStream);
  // const {file: {createReadStream}} = await upload;
  const {createReadStream, mimetype, filename } = await upload;
  const stream = createReadStream();
  // console.log("stream", stream);
  const file = await storeUpload( {stream, filename, mimetype });
  return file;
};

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

      return await Jobs.find(params).sort({ createdAt: -1 })
        .populate('skills')
        .populate('applicants')
        .populate('candidates')
        .populate('matchedCandidates')
        
    },

    job: async (parent, { _id }) => {
      return await Jobs.findOne({ _id })
        .populate('skills')
        .populate('applicants')
        .populate('candidates')
        .populate('matchedCandidates')
    },

    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('jobOffers')
        .populate('applied')
        .populate('matchedJobs')
    },
    user: async (parent, { email }) => {
      return User.findOne({ email })
        .select('-__v -password')
        .populate('jobOffers')
        .populate('applied')
        .populate('matchedJobs')
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('jobs')
          .populate('skills')
          .populate('jobOffers')
          .populate('applied')
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

    uploadFile: async ( parent, {file} ) => {
      console.log(file);
      mkdir('images', { recursive: true }, (err) => {
        if (err) throw err;
      });

     
      const upload = await processUpload(file);
      console.log(upload);
      await Image.create(upload);

      return upload;
    },
    addUser: async (parent, {args, file}) => {
      if(upload){
        const user = await User.create(args);
        const token = signToken(user);
      }
      
      return { token, user, image };
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
      if (context.user) {
        const job = await Jobs.create({ ...args, email: context.user.email });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { jobs: job._id } },
          { new: true }
        );

        return job;
      }
    },
    updateJob: async (parent, args, context) => {
      if (context.user) {
        const job = await Jobs.findOneAndUpdate(
          { _id: jobId },
          args,
          { new: true }
        );

        return job;
      }
    },
    showJobInterest: async (parent, { jobId }, context) => {
      if (context.user) {
        const updatedJob = await Jobs.findOneAndUpdate(
          { _id: jobId },
          { $addToSet: { applicants: context.user._id } },
          { new: true }
        );
        return updatedJob;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    showUserInterest: async (parent, { userId }, context) => {
      if (context.user) {
        const userPost = await User.findOne({ email: context.user.email })
        const updatedUser = await User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { jobOffers: jobId } },
          { new: true }
        );
        return updatedUser;
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
