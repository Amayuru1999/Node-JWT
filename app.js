const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

require('dotenv').config();
// middleware
app.use(express.static('public'));

// view engine
app.set('view engine', 'ejs');
const mongoURL = process.env.MONGODB_URL;
// database connection
mongoose.connect(mongoURL, {
  useNewUrlParser: true, // no longer needed
  useUnifiedTopology: true // no longer needed
})
.then(() => {
  console.log('Connected to MongoDB');
  // Your code here
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err.message);
});
// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));