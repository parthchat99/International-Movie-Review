const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
  movie_name: {
    type: String
  },
  movie_yor: {
    type: String
  },
  movie_plot: {
    type: String
  },
  producer_name: {
    type: String
  },
  producer_sex: {
    type: String
  },
  producer_dob: {
    type: String
  },
  producer_bio: {
    type: String
  },
  director_name: {
    type: String
  },
  director_sex: {
    type: String
  },
  director_dob: {
    type: String
  },
  director_bio: {
    type: String
  },
  actor1_name: {
    type: String
  },
  actor1_sex: {
    type: String
  },
  actor1_dob: {
    type: String
  },
  actor1_bio: {
    type: String
  },
  actor2_name: {
    type: String
  },
  actor2_sex: {
    type: String
  },
  actor2_dob: {
    type: String
  },
  actor2_bio: {
    type: String
  },
  actor3_name: {
    type: String
  },
  actor3_sex: {
    type: String
  },
  actor3_dob: {
    type: String
  },
  actor3_bio: {
    type: String
  },
  actor4_name: {
    type: String
  },
  actor4_sex: {
    type: String
  },
  actor4_dob: {
    type: String
  },
  actor4_bio: {
    type: String
  },
},{
    collection: 'business'
});
module.exports = mongoose.model('Business', Business);