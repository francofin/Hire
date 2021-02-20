const db = require('../config/connection');
const faker = require('faker');
const { Category, Product, User, Employer, Jobs } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Front End Developer' },
        { name: 'Back End Developer' },
        { name: 'Javascript Developer' },
        { name: 'Python Developer' },
        { name: 'Java Developer' },
        { name: 'React Developer' },
        { name: 'Angular Developer' },
        { name: 'Nodejs/Expressjs Developer' },
        { name: 'Php, .NET Developer' },
        { name: 'Software Engineer' },
        { name: 'Fullstack Developer' },
        { name: '#C Developer' },
        { name: 'Finance' },
        { name: 'Investment Analyst' },
        { name: 'Portfolio Management' },
        { name: 'Quantitative Analyst' },
        { name: 'Marketing' },
        { name: 'Sales' },
        { name: 'Entertainment' },
        { name: 'Construction' },
        { name: 'Cleaning' },
        { name: 'Contactor' }
    ]);

    console.log('categories seeded');

    await Product.deleteMany();

    const product = await Product.insertMany([
        {
            name: 'Premium User Services',
            description:
                'Premium service to allow potential employers to see your profile first, Get more hits and appropriate matches to find your career path. \
        Our Premium service allows you to match with more employers on a daily basis. Have your profile show up at the top of the list when \
        employers search for potential candidates, directly reach out to potential employees with a personal message.',
            image: 'employeeproduct.jpg',
            price: 20.99,
            quantity: 1
        },
        {
            name: 'Premium Employer Services',
            description:
                "Premium Employer Services allow you to get the best candidates for your organization. Filter candidates by different requirements, get better matches \
                for your roles, Use Hire's powerful matching algorithm to more efficiently find your ideal canaidate.",
            image: 'employerproduct.jpg',
            price: 50.99,
            quantity: 1
        }
    ]);

    console.log('products seeded');


    await User.deleteMany();
    //create User Data
    const userData = [];

    for(let i = 0; i<50; i+=1) {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const email = faker.internet.email(firstName);
        const password = faker.internet.password();

        userData.push({firstName, lastName, email, password})
    }

    const createdUsers = await User.collection.insertMany(userData);

    //create Emoloyer data
    const employerData =[];

    for(let i=0; i<100; i+=1) {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const companyName = faker.company.companyName();
        const email = faker.internet.email(companyName);
        const password = faker.internet.password();

        employerData.push({firstName, lastName, companyName, email, password});
    }

    const createdEmployers = await Employer.collection.insertMany(employerData);

    //create Job data
    let jobData =[];
    const randomNumber = function() {
        const number = Math.floor(Math.Random() * categories.ops.length);
        return number
    }

    for(let i=0; i<100; i+=1) {
        const role = faker.name.jobTitle();
        const description = faker.name.jobDescriptor();
        const image = faker.image.business();
        const category = categories[randomNumber()]._id;

        const randomEmployerIndex = Math.floor(Math.random() * createdEmployers.ops.length);
        const {companyName, _id: employerId} = createdEmployers.ops[randomEmployerIndex];

        const createdJob = await Jobs.create({role, description, image, category, companyName, image, category});

        const updatedEmployer = await Employer.updateOne(
            {_id: employerId},
            {$push: {jobs: createdJob._id}}
        );

        jobData.push(createdJob);
    }

    //create Interests
    for(let i=0; i<100; i+=1) {
        const interestShown = faker.random.boolean();
        const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
        const { email } = createdUsers.ops[randomUserIndex];
        const randomJobIndex = Math.floor(Math.random() * jobData.length);
        const { _id: jobsId } = jobData[randomJobIndex];

        await Jobs.updateOne(
            {_id: jobsId},
            {$push: {interests: {interestShown, email}}},
            { runValidators: true }
        );
    }

    //Create Profile Data
    for(let i=0; i<createdUsers.ops.length; i+=1) {
        const profiletext = faker.lorem.paragraphs();
    }

    // //create candidates
    // for(let i=0; i<200; i+=1) {
    //     const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    //     const {firstName, lastName, email} = createdUsers.ops[randomUserIndex];
    //     const randomInterestIndex = Math.floor(Math.random() * jobData.ops.length);

    // }

})

