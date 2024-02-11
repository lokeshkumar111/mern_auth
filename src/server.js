const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

const uri = 'mongodb://localhost:27017/auth'; 

// Connect to MongoDB
const connectToDB = async () => {
  try {
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    global.db = client.db('auth'); 
    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

connectToDB();

// Use body parser to handle form data
app.use(bodyParser.json());

// Routes
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  // Find existing user with the same email
  const existingUser = await global.db.collection('users').findOne({ email });

  if (existingUser) {
    return res.status(409).send('Email already exists');
  }

  // Insert new user into the database
  await global.db.collection('users').insertOne({ email, password });

  res.status(201).send('User created successfully');
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Retrieve user based on email
  const user = await global.db.collection('users').findOne({ email });

  if (!user) {
    return res.status(401).send('Invalid email or password');
  }

  // Compare hashed passwords (implement this step)

  // If passwords match, generate auth token (implement token generation and security measures)
  // Send token to the client

  res.status(200).send('Login successful');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
