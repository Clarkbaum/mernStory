//story.js
const Story = require('../models/story.js');

exports.create = (request, response) => {
  const story = Object.assign({}, request.body);
  Story.create(story)
  .then(result => response.status(201).json(result))
  .catch((err) => console.log("story.create error", err));
};

exports.get = (request, response) => {
  Story.find()
  .then(result => response.status(200).json(result))
  .catch((err) => console.log("story.get error", err));
};

exports.update = (request, response) => {
  console.log("updated")
  Story.findById(request.params.story).exec()
  .then((data) => {
    const doc = data;
    doc.body = request.body.body;
    return doc.save();
  })
  .then((result) => {
    response.status(200).json(result);
  })
  .catch((err) => console.log("story.update error", err));
};

exports.delete = (request, response) => {
  console.log("HERE")
  console.log("Story.findById(request.params.story).exec()", Story.findById(request.params.story).exec())
  Story.findById(request.params.story).exec()
  .then(doc => doc.remove())
  .then(doc => response.status(200).json(doc))
  .catch((err) => console.log("story.delete error", err));
};