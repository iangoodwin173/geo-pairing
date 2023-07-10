const mongoose = require('mongoose');

// ESTABLISH a connection to the database through .env file
// WE all have to set up our own .env file in the root of the project file: 
// file name: ".env"

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/programming-thoughts');

module.exports = mongoose.connection;
