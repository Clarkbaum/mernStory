const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config.js');
const story = require('./controllers/story.js');

require('./config/database.js')(config);


const app = express();
module.exports = app;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('access-control-allow-origin', '*');
  res.setHeader('access-control-allow-methods', 'POST, PUT, GET, DELETE');
  res.setHeader('access-control-allow-headers', 'x-parse-application-id, x-parse-rest-api-key, Content-Type, Accept');
  next();
});

app.post('/storys', function(req, res){
  story.create(req, res)
})

app.put('/storys/:story', function(req, res){
  //the put will include the story id in the request.params
  story.update(req, res)
})

app.get('/storys', function(req, res){
  story.get(req, res)
})

app.delete('/storys/:story ', function(req, res){
  //the delete will include the story id in the request.params
  story.delete(req, res)
})

app.get('*', function(req, res){
  console.log("NOT FOUND");
  res.status(404)
})

app.listen('8000', function(){
  console.log('listening on port 8000');
})