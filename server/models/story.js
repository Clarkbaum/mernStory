const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articlesSchema = Schema({
  story: String
}, { strict: 'throw' });


module.exports = mongoose.model('articles', articlesSchema);