// mongo connection here
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/coas';

mongoose.connect(mongoURI, {
  useNewURLParser: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('connected to database')
});

module.exports = db;