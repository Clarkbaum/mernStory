const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articlesSchema = Schema({
  // title: String
}, { strict: 'throw' });


module.exports = mongoose.model('articles', articlesSchema);