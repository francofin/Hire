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
        const image = `${faker.image.people()}?random=${Date.now()}`
        const skills = skillSet[Math.floor(Math.random()*skillSet.length)]._id;

        userData.push({ firstName, lastName, email, password, profileText, image, skills })
    }

    const createdUsers = await User.collection.insertMany(userData);
    console.log("Users Created");
    // console.log(userData);
    
    

    await Jobs.deleteMany();
    //create User Data
    //create Job data
    let jobData = [];
    const randomNumber = function () {
        const number = Math.floor(Math.random() * skillSet.length);
        return number
    }

    for (let i = 0; i < 102; i += 1) {
        const description = faker.lorem.paragraphs();
        const image = `${faker.image.business()}?random=${Date.now()}`
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

    // const createdJobs = await Jobs.collection.insertMany(jobData);
    // console.log("Users Created");
    // console.log(jobData);


     // create Interests v2
     for (let i = 0; i < 100; i += 1) {
        const randomUserIndex = Math.floor(Math.random() * userData.length);
        const { _id: userId } = userData[randomUserIndex];
        // let showInterestInUser = userId;
        // while (showInterestInUser === userId) {
        const randomJobIndex = Math.floor(Math.random() * jobData.length);
        let interestedJob = jobData[randomJobIndex];
        // }
        await User.updateOne(
            {_id:userId},
            { $addToSet: {jobOffers:interestedJob}}          
            )
    }

  // create Interests v2
  for (let i = 0; i < 50; i += 1) {
    const randomJobIndex = Math.floor(Math.random() * jobData.length);
    const { _id: jobId } = jobData[randomJobIndex];
    const randomUserIndex = Math.floor(Math.random() * userData.length);
    let interestedUser = userData[randomUserIndex]; 
    
      
    // console.log("interest id logged", interestId);
    // console.log("jobId", jobId);
     await Jobs.updateOne(
        {_id:jobId},
        { $addToSet: {applicants:interestedUser}}        
        )
}

// create Applied interest v2
for (let i = 0; i < 100; i += 1) {
    const randomUserIndex = Math.floor(Math.random() * userData.length);
    const { _id: userId } = userData[randomUserIndex];
    const randomJobIndex = Math.floor(Math.random() * jobData.length);
    let appliedId = jobData[randomJobIndex]; 

      
    // console.log("interest id logged", interestId);
    // console.log("jobId", jobId);
     await User.updateOne(
        {_id:userId},
        { $addToSet: {applied:appliedId}}        
        )
}

// create candidate interest v2
for (let i = 0; i < 100; i += 1) {
    const randomJobIndex = Math.floor(Math.random() * jobData.length);
    const { _id: jobId } = jobData[randomJobIndex];
    const randomUserIndex = Math.floor(Math.random() * userData.length);
    let candidateId = userData[randomUserIndex]; 

    
      
    // console.log("interest id logged", interestId);
    // console.log("jobId", jobId);
     await Jobs.updateOne(
        {_id:jobId},
        { $addToSet: {candidates:candidateId}}        
        )
}

    console.log('all done!');
    process.exit(0);

})

