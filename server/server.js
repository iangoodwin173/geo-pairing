const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Handle connection events
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  // Start the Apollo Server here
  startApolloServer();
});

// Define the startApolloServer function
const startApolloServer = async () => {
  // ... your Apollo Server setup code ...
};

