const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const authRoutes = require('./routes/authRoutes');

require('dotenv').config();
// middleware
app.use(express.static('public'));
app.use(express.json())

// view engine
app.set('view engine', 'ejs');
const mongoURL = process.env.MONGODB_URL;
// database connection
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err.message);
});
// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes);