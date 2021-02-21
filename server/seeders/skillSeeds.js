const db = require('../config/connection');
const faker = require('faker');
const { Skills, Product, User, Jobs } = require('../models');

db.once('open', async () => {
    await Skills.deleteMany();

    const skillSet = await Skills.insertMany([
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'Javascript' },
        { name: 'Python' },
        { name: 'Java' },
        { name: 'React' },
        { name: 'Angular' },
        { name: 'Nodejs/Expressjs' },
        { name: 'Sass' },
        { name: 'TypeScript' },
        { name: 'Redux' },
        { name: 'GraphQl' },
        { name: '.NET Developer' },
        { name: 'Php' },
        { name: 'KnockOut' },
        { name: 'jQuery' },
        { name: 'SQL' },
        { name: 'MERN' },
        { name: 'figma' },
        { name: 'Rust' },
        { name: 'Powershell' },
        { name: 'UX/UI design' },
        { name: 'Swift' },
        { name: 'C' },
        { name: 'TDD' },
        { name: 'BDD' },
        { name: 'Docker' },
        { name: 'C++' },
        { name: '#C' },
    ]);

    console.log('skills seeded');

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
    ]);

    console.log('products seeded');


    await User.deleteMany();
    //create User Data
    const userData = [];

    for (let i = 0; i < 50; i += 1) {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const email = faker.internet.email(firstName);
        const password = faker.internet.password();
        const profileText = faker.lorem.paragraphs();
        const image = faker.image.people();
        const skills = skillSet[Math.floor(Math.Random()*skillSet.ops.length)]._id;

        userData.push({ firstName, lastName, email, password, profileText, image, skills })
    }

    const createdUsers = await User.collection.insertMany(userData);


    //create Job data
    let jobData = [];
    const randomNumber = function () {
        const number = Math.floor(Math.Random() * skillSet.ops.length);
        return number
    }

    for (let i = 0; i < 100; i += 1) {
        const description = faker.name.jobDescriptor();
        const image = faker.image.business();
        const skills = skillSet[randomNumber()]._id;
        const positionFilled = faker.random.boolean();

        const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
        const { email, _id: userId } = createdUsers.ops[randomUserIndex];

        const createdJob = await Jobs.create({email, description, image, skills, positionFilled });

        const updatedUser = await User.updateOne(
            { _id: userId },
            { $push: { jobs: createdJob._id } }
        );

        jobData.push(createdJob);
    }

    //create Interests
    for (let i = 0; i < 100; i += 1) {
        const interestShown = faker.random.boolean();
        const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
        const { email } = createdUsers.ops[randomUserIndex];
        const randomJobIndex = Math.floor(Math.random() * jobData.length);
        const { _id: jobsId } = jobData[randomJobIndex];

        await Jobs.updateOne(
            { _id: jobsId },
            { $push: { interests: { interestShown, email } } },
            { runValidators: true }
        );
    }


    console.log('all done!');
    process.exit(0);

})

