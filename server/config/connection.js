const mongoose = require('mongoose');

const connectionURI = 'mongodb://localhost:27017/geo-pairing-db';

mongoose.connect(connectionURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
});
