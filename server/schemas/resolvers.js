const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Order, Employer, Jobs, Profile} = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')(Process.env.STRIPE);

const resolvers = {
    Query: {
        categories: async() => {
            return await Category.find();
        },
        product: async(parent, {name}) => {
            const params = {};
            if(name) {
                params.name = {
                    $regex: name
                };
            }

            return await Product.find(params);
        },
        
        jobs: async(parent, {category, companyName, role,}) => {
            const params = {};

            if(category) {
                params.category = category;
            }

            if(companyName) {
                params.companyName = {
                    $regex: companyName};
            }

            if(role) {
                params.role = {
                    $regex: role
                }
            }

            return await Jobs.find(params)
            .populate('category')
            .populate('companyName')
            .populate('role')
            .populate('interests')
        },

        job: async(parent, {_id}) => {
            return await Jobs.findOne({_id})
            .populate('category')
            .populate('companyName')
            .populate('role')
            .populate('interests')
        },

        users: async () => {
            return User.find()
            .select('-__v -password')
                .populate('profile');
        }, 
        user: async(parent, {email}) => {
            return User.findOne({ email })
                .select('-__v -password')
                .populate('profile');
        },
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('profile')
                    .populate('jobs');

                console.log('context', context.user);
                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        employers: async () => {
            return Employer.find()
            .select('-__v -password')
                .populate('profile');
        },

        employer: async(parent, {email}) => {
            return Employer.findOne({ email })
                .select('-__v -password')
                .populate('profile');
        },
        company: async (parent, args, context) => {
            if (context.employer) {
                const employerData = await Employer.findOne({ _id: context.employer._id })
                    .select('-__v -password')
                    .populate('profile')
                    .populate('jobs');

                console.log('context', context.employer);
                return employerData;
            }

            throw new AuthenticationError('Not logged in');
        },
        order: async (parent, { _id }, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id).populate({
                path: 'orders.product'
              });
      
              return user.orders.id(_id);
            }
            else if(context.employer) {
                const employer = await Employer.findById(context.employer._id)
                .populate({
                    path: 'orders.product'
                });

                return employer.orders.id(_id);
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

          addOrder: async (parent, { products }, context) => {
            console.log(context);
            if (context.user) {
              const order = new Order({ products });
      
              await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
      
              return order;
            }
            else if(context.employer){
                const order = new Order({ products });
        
                await Employer.findByIdAndUpdate(context.employer._id, { $push: { orders: order } });
        
                return order;
              }
      
            throw new AuthenticationError('Not logged in');
          },

          addProfile: async (parent, args) => {
            const profile = await Image.create
          },
        
          addEmployer: async (parent, args) => {
            const employer = await Employer.create(args);
            const token = signToken(employer);
      
            return { token, employer };
          },
          login: async (parent, { email, password }) => {
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
          }
    }
};


module.exports = resolvers;
