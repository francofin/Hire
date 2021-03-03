const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hire', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});


module.exports = {
  s3: {
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
    region: process.env.REGION,
    params: {
      ACL: 'public-read',
      Bucket: process.env.S3_BUCKET,
    },
  },
  app: {
    storageDir: 'tmp',
  },
};
const AWS = require('aws-sdk');
const config = require('./config');

awsConnection = new AWS.S3(config.s3);

mongooseConnection = mongoose.connection
module.exports = {awsConnection, mongooseConnection};
