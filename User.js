// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollno: { type: String, required: true, unique: true },
  dept: { type: String, required: true },
  dob: { type: String, required: true },
  year: { type: Number, required: true },
  no_of_cert: { type: Number, required: true },
  certificates: [String],
  leetcode_solved: { type: Number, required: true },
  codechef_solved: { type: Number, required: true },
  github: String,
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
  paper_published: [String]
});

const User = mongoose.model('User', userSchema);

module.exports = User;