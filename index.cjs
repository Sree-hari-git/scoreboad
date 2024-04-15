// server.cjs
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://sreeharim:dbsreehari@cluster0.jyqkcgj.mongodb.net/Scoreboard_sece', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));




const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollno: { type: String, required: true, unique: true },
  dept: { type: String, required: true },
  dob: { type: String, required: true },
  year: {
    type: Number,
    required: true,
    min: 1,
    max: 4
  },
  no_of_cert: { type: Number, required: true },
  certificates: [String],
  leetcode_solved: { type: Number, required: true },
  codechef_solved: { type: Number, required: true },
  cgpa: { type: Number, required: true },
  attendance: { type: Number, required: true },
  nptel: [String],
  coursera: [String],
  udemy: [String],
  other_platform: [String],
  no_of_project: { type: Number, required: true },
  projects: [String],
  external_participations: [String],
  awards: [String],
  paper_published: [String],
  leetcode_URL: { type: String, required: true },
  codechef_URL: { type: String, required: true },
  github_URL: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);
// Route to handle POST request for adding a new user
app.post('/api/user', async (req, res) => {
    try {
        const newUser = await User.create(req.body); // Create a new user based on the request body
        res.status(201).json(newUser); // Respond with the newly created user
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});