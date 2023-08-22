const mongoose = require('mongoose');

// Get the port number from an environmental variable
const port = process.env.MONGODB_PORT || 27017;

const connectionString = `mongodb://localhost:${port}/ChainedWolfeMetalCrafts`;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
